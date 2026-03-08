import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type BackendAccessResponse = {
  user?: {
    id: number;
    name: string;
    email: string;
    role: "admin" | "viewer";
  };
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { code?: string };
    const code = body.code?.trim();

    if (!code) {
      return NextResponse.json(
        { message: "Access code is required" },
        { status: 400 },
      );
    }

    const backendUrl = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;

    if (!backendUrl) {
      return NextResponse.json(
        { message: "Backend URL is not configured" },
        { status: 500 },
      );
    }

    const backendResponse = await fetch(`${backendUrl}/api/project-access`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
      cache: "no-store",
    });

    const data = (await backendResponse.json()) as BackendAccessResponse;

    if (!backendResponse.ok || !data.user) {
      return NextResponse.json(
        { message: data.message ?? "Invalid access code" },
        { status: 401 },
      );
    }

    const cookieStore = await cookies();

    cookieStore.set("project-access", JSON.stringify(data.user), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      user: data.user,
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

const payloadApiUrl = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;

if (!payloadApiUrl) {
  throw new Error("NEXT_PUBLIC_PAYLOAD_API_URL is not defined");
}

type PayloadFindResponse<T> = {
  docs: T[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
};

type FindOptions = {
  depth?: number;
  limit?: number;
  page?: number;
  sort?: string;
};

export async function payloadFind<T>(
  collection: string,
  options: FindOptions = {},
): Promise<PayloadFindResponse<T>> {
  const searchParams = new URLSearchParams();

  if (typeof options.depth === "number") {
    searchParams.set("depth", String(options.depth));
  }

  if (typeof options.limit === "number") {
    searchParams.set("limit", String(options.limit));
  }

  if (typeof options.page === "number") {
    searchParams.set("page", String(options.page));
  }

  if (options.sort) {
    searchParams.set("sort", options.sort);
  }

  const query = searchParams.toString();
  const url = `${payloadApiUrl}/api/${collection}${query ? `?${query}` : ""}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch collection: ${collection}`);
  }

  return response.json();
}

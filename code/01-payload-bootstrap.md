# 01-payload-bootstrap.md

## Goal

Integrate Payload CMS into the existing Next.js 16 app using Neon Postgres.

## Step 1 tasks

1. Install Payload CMS and Postgres adapter
2. Add required env variables
3. Create minimal Payload config
4. Connect Payload to Neon database
5. Mount Payload admin and API routes in Next.js
6. Add one test collection
7. Run the app and verify `/admin` works
8. Create first admin user

## Required env

- `DATABASE_URL`
- `PAYLOAD_SECRET`
- `NEXT_PUBLIC_SERVER_URL`

## Required packages

- `payload`
- `@payloadcms/next`
- `@payloadcms/db-postgres`
- `graphql`
- `sharp`

## Expected result

- Payload is running inside the current project
- Neon Postgres is connected
- `/admin` opens
- one test collection is visible
- first admin user can log in

## Definition of done

- app starts without errors
- Payload connects to Neon
- admin panel works
- test collection CRUD works

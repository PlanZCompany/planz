import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import path from "path";
import { fileURLToPath } from "url";
import { Ideas } from "./collections/Ideas";
import { Members } from "./collections/Members";
import { Projects } from "./collections/Projects";
import { Tasks } from "./collections/Tasks";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  defaultDepth: 3,
  editor: lexicalEditor(),
  collections: [Members, Projects, Ideas, Tasks, Users, Media],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    push: true,
  }),
  globals: [],
  sharp,
});

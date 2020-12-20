import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./models/Post";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "beaudit",
  debug: __prod__,
  type: "postgresql",
  user: "postgres",
  password: "admin",
} as Parameters<typeof MikroORM.init>[0];

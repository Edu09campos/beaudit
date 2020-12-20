import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./models/Post";
import path from "path";
import { User } from "./models/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "beaudit",
  debug: __prod__,
  type: "postgresql",
  user: "postgres",
  password: "admin",
} as Parameters<typeof MikroORM.init>[0];

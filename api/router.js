import Router from "@koa/router";
import { PrismaClient } from "@prisma/client";
import * as users from "./users/index.js";
import * as hunches from "./hunches/index.js";
import * as games from "./games/index.js";

export const router = new Router();

const prisma = new PrismaClient();

router.post("/users", users.create);
router.get("/users", users.list);
router.get("/login", users.login);
router.get("/hunches/:username", users.hunches);

router.get("/games", games.list);

router.post("/hunches", hunches.create);

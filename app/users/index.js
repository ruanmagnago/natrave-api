import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import atob from "atob";

const prisma = new PrismaClient();

export const create = async (ctx) => {
  const password = await bcrypt.hash(ctx.request.body.password, 10);
  const data = {
    name: ctx.request.body.name,
    username: ctx.request.body.username,
    email: ctx.request.body.email,
    password,
  };

  try {
    const { password, ...user } = await prisma.user.create({ data });
    ctx.body = user;
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

export const list = async (ctx) => {
  try {
    const { password, ...users } = await prisma.user.findMany();
    ctx.body = users;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

export const login = async (ctx) => {
  const [type, token] = ctx.request.headers.authorization.split(" ");
  const [email, plainTexPassword] = atob(token).split(":");
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    ctx.status = 404;
    return;
  }

  const passwordMatch = bcrypt.compare(plainTexPassword, user.password);

  if (!passwordMatch) {
    ctx.status = 404;
    return;
  }

  const { password, ...result } = user;

  const acessToken = jwt.sign(
    {
      sub: user.id,
      name: user.name,
      expireIn: "7d",
    },
    process.env.JWT_SECRET
  );

  ctx.body = {
    user: result,
    acessToken,
  };
};

export const hunches = async (ctx) => {
  try {
    const username = ctx.request.params.username;
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      ctx.status = 404;
      return;
    }

    const hunches = await prisma.hunch.findMany({
      where: {
        userId: user.id,
      },
    });

    ctx.body = {
      name: user.name,
      hunches,
    };
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

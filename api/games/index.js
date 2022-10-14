import { PrismaClient } from "@prisma/client";
import { addDays, formatISO } from "date-fns";
const prisma = new PrismaClient();

export const list = async (ctx) => {
  try {
    const currentDate = ctx.request.query.matchTime;
    const where = currentDate
      ? {
          matchTime: {
            gte: currentDate,
            lt: formatISO(addDays(new Date(currentDate), 1)),
          },
        }
      : {};

    const games = await prisma.game.findMany({ where });
    ctx.body = games;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

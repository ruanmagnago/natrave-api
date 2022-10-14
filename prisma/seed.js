import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const matches = [
  {
    matchTime: "2022-11-20T16:00:00Z",
    homeTeam: "cat",
    awayTeam: "equ",
  },
  {
    matchTime: "2022-11-21T13:00:00Z",
    homeTeam: "ing",
    awayTeam: "ira",
  },
  {
    matchTime: "2022-11-21T16:00:00Z",
    homeTeam: "sen",
    awayTeam: "hol",
  },
  {
    matchTime: "2022-11-21T19:00:00Z",
    homeTeam: "eua",
    awayTeam: "gal",
  },
  {
    matchTime: "2022-11-22T10:00:00Z",
    homeTeam: "arg",
    awayTeam: "ara",
  },
  {
    matchTime: "2022-11-22T13:00:00Z",
    homeTeam: "din",
    awayTeam: "tun",
  },
  {
    matchTime: "2022-11-22T16:00:00Z",
    homeTeam: "mex",
    awayTeam: "pol",
  },
  {
    matchTime: "2022-11-22T19:00:00Z",
    homeTeam: "fra",
    awayTeam: "aus",
  },
  {
    matchTime: "2022-11-23T10:00:00Z",
    homeTeam: "mar",
    awayTeam: "cro",
  },
  {
    matchTime: "2022-11-23T13:00:00Z",
    homeTeam: "ale",
    awayTeam: "jap",
  },
  {
    matchTime: "2022-11-23T16:00:00Z",
    homeTeam: "esp",
    awayTeam: "cos",
  },
  {
    matchTime: "2022-11-23T19:00:00Z",
    homeTeam: "bel",
    awayTeam: "can",
  },
  {
    matchTime: "2022-11-24T10:00:00Z",
    homeTeam: "sui",
    awayTeam: "cam",
  },
  {
    matchTime: "2022-11-24T13:00:00Z",
    homeTeam: "uru",
    awayTeam: "cor",
  },
  {
    matchTime: "2022-11-24T16:00:00Z",
    homeTeam: "por",
    awayTeam: "gan",
  },
  {
    matchTime: "2022-11-24T19:00:00Z",
    homeTeam: "bra",
    awayTeam: "ser",
  },
  {
    matchTime: "2022-11-25T10:00:00Z",
    homeTeam: "gal",
    awayTeam: "ira",
  },
  {
    matchTime: "2022-11-25T13:00:00Z",
    homeTeam: "cat",
    awayTeam: "sen",
  },
  {
    matchTime: "2022-11-25T16:00:00Z",
    homeTeam: "hol",
    awayTeam: "equ",
  },
  {
    matchTime: "2022-11-25T19:00:00Z",
    homeTeam: "ing",
    awayTeam: "eua",
  },
  {
    matchTime: "2022-11-26T10:00:00Z",
    homeTeam: "tun",
    awayTeam: "aus",
  },
  {
    matchTime: "2022-11-26T13:00:00Z",
    homeTeam: "pol",
    awayTeam: "ara",
  },
  {
    matchTime: "2022-11-26T16:00:00Z",
    homeTeam: "fra",
    awayTeam: "din",
  },
  {
    matchTime: "2022-11-26T19:00:00Z",
    homeTeam: "arg",
    awayTeam: "mex",
  },
  {
    matchTime: "2022-11-27T10:00:00Z",
    homeTeam: "jap",
    awayTeam: "cos",
  },
  {
    matchTime: "2022-11-27T13:00:00Z",
    homeTeam: "bel",
    awayTeam: "mar",
  },
  {
    matchTime: "2022-11-27T16:00:00Z",
    homeTeam: "cro",
    awayTeam: "can",
  },
  {
    matchTime: "2022-11-27T19:00:00Z",
    homeTeam: "esp",
    awayTeam: "sui",
  },
  {
    matchTime: "2022-11-28T10:00:00Z",
    homeTeam: "cam",
    awayTeam: "ser",
  },
  {
    matchTime: "2022-11-28T13:00:00Z",
    homeTeam: "cor",
    awayTeam: "gan",
  },
  {
    matchTime: "2022-11-28T16:00:00Z",
    homeTeam: "bra",
    awayTeam: "sui",
  },
  {
    matchTime: "2022-11-28T19:00:00Z",
    homeTeam: "por",
    awayTeam: "uru",
  },
  {
    matchTime: "2022-11-29T15:00:00Z",
    homeTeam: "equ",
    awayTeam: "sen",
  },
  {
    matchTime: "2022-11-29T15:00:00Z",
    homeTeam: "hol",
    awayTeam: "cat",
  },
  {
    matchTime: "2022-11-29T19:00:00Z",
    homeTeam: "gal",
    awayTeam: "ing",
  },
  {
    matchTime: "2022-11-29T19:00:00Z",
    homeTeam: "ira",
    awayTeam: "eua",
  },
  {
    matchTime: "2022-11-30T15:00:00Z",
    homeTeam: "aus",
    awayTeam: "din",
  },
  {
    matchTime: "2022-11-30T15:00:00Z",
    homeTeam: "tun",
    awayTeam: "fra",
  },
  {
    matchTime: "2022-11-30T19:00:00Z",
    homeTeam: "pol",
    awayTeam: "arg",
  },
  {
    matchTime: "2022-11-30T19:00:00Z",
    homeTeam: "ara",
    awayTeam: "mex",
  },
  {
    matchTime: "2022-12-01T15:00:00Z",
    homeTeam: "cro",
    awayTeam: "bel",
  },
  {
    matchTime: "2022-12-01T15:00:00Z",
    homeTeam: "can",
    awayTeam: "mar",
  },
  {
    matchTime: "2022-12-01T19:00:00Z",
    homeTeam: "jap",
    awayTeam: "esp",
  },
  {
    matchTime: "2022-12-01T19:00:00Z",
    homeTeam: "cos",
    awayTeam: "ale",
  },
  {
    matchTime: "2022-12-02T15:00:00Z",
    homeTeam: "gan",
    awayTeam: "uru",
  },
  {
    matchTime: "2022-12-02T15:00:00Z",
    homeTeam: "cor",
    awayTeam: "por",
  },
  {
    matchTime: "2022-12-02T19:00:00Z",
    homeTeam: "ser",
    awayTeam: "sui",
  },
  {
    matchTime: "2022-12-02T19:00:00Z",
    homeTeam: "cam",
    awayTeam: "bra",
  },
];

const main = () =>
  prisma.game.createMany({
    data: matches,
  });

main().then(console.log).catch(console.log);

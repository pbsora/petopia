import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Request, Response } from "express";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.post("/", async (req: Request, res: Response) => {
  await prisma.user.create({
    data: { name: "Pedro" },
  });

  const users = await prisma.user.findMany();

  console.log(users);

  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

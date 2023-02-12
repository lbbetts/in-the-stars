/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function post(req, res) {
  const fate = await prisma.fates.create({
    data: req.body,
  });

  return {
    body: fate,
  };
}
import { prisma } from "@/server/db";
import type { Prisma, NotificationType } from "@prisma/client";

export async function createNotification(
  userId: string,
  type: NotificationType,
  title: string,
  body: string,
  data?: unknown
) {
  return prisma.notification.create({
    data: {
      userId,
      type,
      title,
      body,
      data: (data as unknown as Prisma.InputJsonValue) ?? undefined,
    },
  });
}

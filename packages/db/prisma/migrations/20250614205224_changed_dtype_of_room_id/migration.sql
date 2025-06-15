/*
  Warnings:

  - The primary key for the `room` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "chat" DROP CONSTRAINT "chat_roomId_fkey";

-- AlterTable
ALTER TABLE "chat" ALTER COLUMN "roomId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "room" DROP CONSTRAINT "room_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "room_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "room_id_seq";

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

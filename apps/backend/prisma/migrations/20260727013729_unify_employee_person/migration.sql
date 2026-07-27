/*
  Warnings:

  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_roleId_fkey";

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "employeeId" INTEGER;

-- DropTable
DROP TABLE "Person";

-- CreateIndex
CREATE UNIQUE INDEX "Role_employeeId_key" ON "Role"("employeeId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

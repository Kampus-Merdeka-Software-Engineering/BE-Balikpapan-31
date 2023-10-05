/*
  Warnings:

  - You are about to drop the column `doctor_id` on the `Pasien` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Pasien_doctor_id_idx` ON `Pasien`;

-- AlterTable
ALTER TABLE `Pasien` DROP COLUMN `doctor_id`;

/*
  Warnings:

  - You are about to drop the column `themeColor` on the `testimonial` table. All the data in the column will be lost.
  - Added the required column `theme` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `testimonial` DROP COLUMN `themeColor`,
    ADD COLUMN `theme` JSON NOT NULL,
    MODIFY `text` LONGTEXT NOT NULL;

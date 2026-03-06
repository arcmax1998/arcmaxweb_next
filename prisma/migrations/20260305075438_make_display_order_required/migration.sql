-- DropForeignKey
ALTER TABLE `projectfeature` DROP FOREIGN KEY `ProjectFeature_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `projectimage` DROP FOREIGN KEY `ProjectImage_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `projecttechnology` DROP FOREIGN KEY `ProjectTechnology_projectId_fkey`;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `role` VARCHAR(255) NOT NULL DEFAULT 'Analyst • Architect • Coder • Tester';

-- CreateTable
CREATE TABLE `skills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(100) NOT NULL,
    `categoryColor` VARCHAR(50) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `description` TEXT NOT NULL,
    `skillsList` JSON NOT NULL,
    `displayOrder` INTEGER NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_category`(`category`),
    INDEX `idx_display_order`(`displayOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

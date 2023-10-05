-- CreateTable
CREATE TABLE `Pasien` (
    `pasien_id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctor_id` INTEGER NOT NULL,
    `pasien_name` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `service` VARCHAR(191) NOT NULL,
    `doctor_name` VARCHAR(191) NOT NULL,
    `complaint` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Pasien_doctor_id_idx`(`doctor_id`),
    PRIMARY KEY (`pasien_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `doctor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctor_name` VARCHAR(191) NOT NULL,
    `specialist` VARCHAR(191) NOT NULL,
    `license` VARCHAR(191) NOT NULL,
    `university` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`doctor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

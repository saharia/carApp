--User Table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `gender` VARCHAR(10) DEFAULT NULL,
  `date_of_birth` VARCHAR(15) DEFAULT NULL,
  `email` VARCHAR(50) NOT NULL,
  `contact_number` VARCHAR(15) DEFAULT NULL,
  `avatar` VARCHAR(50) DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT '0',
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL
);

--Migration table
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `migration` VARCHAR(50) NOT NULL
);

INSERT INTO `migrations` (`migration`) VALUES ('basic.sql');
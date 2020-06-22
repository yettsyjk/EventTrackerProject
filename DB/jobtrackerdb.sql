-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema jobtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `jobtrackerdb` ;

-- -----------------------------------------------------
-- Schema jobtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jobtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `jobtrackerdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(200) NULL,
  `last_name` VARCHAR(200) NULL,
  `email` VARCHAR(200) NULL,
  `role` VARCHAR(45) NULL,
  `create_date` DATETIME NULL,
  `update_date` DATETIME NULL,
  `enabled` TINYINT NULL DEFAULT 1,
  `username` VARCHAR(100) NULL,
  `password` VARCHAR(200) NULL,
  `admin` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `application`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `application` ;

CREATE TABLE IF NOT EXISTS `application` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NULL,
  `company_name` VARCHAR(5000) NULL,
  `apply_date` DATE NULL,
  `create_date` DATE NULL,
  `user_id` INT NOT NULL,
  `description` TEXT NULL,
  `contact_name` VARCHAR(200) NULL,
  `state` VARCHAR(10) NULL,
  `city` VARCHAR(45) NULL,
  `zip_code` VARCHAR(15) NULL,
  `enabled` TINYINT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `fk_application_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_application_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS myjobtrackeruser@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'myjobtrackeruser'@'localhost' IDENTIFIED BY 'myjobtrackeruser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'myjobtrackeruser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `jobtrackerdb`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (1, 'Bob', 'Sall', 'bs@gmail.com', 'user', '2020-06-04', '2020-06-04 13:00:00', 1, 'user1', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (2, 'Tim', 'Smith', 'ts@yahoo.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user2', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (3, 'Test', 'Courtney', 'bg@outlook.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user3', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (4, 'Bill', 'Hallibut', 'sall@tim.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user4', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (5, 'Tom', 'Rainz', 'grow@yahoo.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user5', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (6, 'Sally', 'Grown', 'bigsalt@outlook.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user6', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (7, 'Oprah', 'Salt', 'needmore@yahoo.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user7', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (8, 'Winfrey', 'Nick', 'tooltime@yahoo.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user8', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (9, 'Joseph', 'John', 's@yahoo.com', 'user', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user9', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `role`, `create_date`, `update_date`, `enabled`, `username`, `password`, `admin`) VALUES (10, 'admin', 'Young', 'admin@yahoo.com', 'admin', '2020-06-04 13:00:00', '2020-06-04 13:00:00', 1, 'user10', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `application`
-- -----------------------------------------------------
START TRANSACTION;
USE `jobtrackerdb`;
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (1, 'Software Developer', 'SAIC', '2020-06-04', '2020-06-04', 1, 'Java, Python, and Object Oriented Development', 'Trevor Lilly', 'AL', 'Mooresville', '35649', 1);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (2, 'Junior Software Developer', 'Radiance Technologies, Inc', '2020-06-04', '2020-06-04', 2, 'Candidates must also have a working knowledge of all software development processes and documentation.', 'Sue Ellan ', 'AL', 'Mooresville', '35749', 1);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (3, 'Software Developer', 'PeopleTec', '2020-06-04', '2020-06-04', 3, 'Understanding of the full mobile development lifecycle', 'Liam Stan', 'AL', 'Tanner', '35671', 1);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (4, 'COLSA- Software Engineer (Drone Development) 5127-987', 'COLSA', '2020-06-20', '2020-06-20', 1, 'Whitney, Bradley & Brown, Inc. (WBB) ', NULL, 'AL', 'Hunstville', NULL, NULL);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (5, 'Software Developer', 'LEIDOS', '2020-06-20', '2020-06-20', 1, 'https://chu.tbe.taleo.net/chu01/ats/careers/v2/myJobs?org=IRTC&cws=38', NULL, 'CO', NULL, NULL, NULL);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (6, 'Software Developer', 'DYNECTICS', '2020-06-20', '2020-06-20', 10, NULL, NULL, 'CO', NULL, NULL, NULL);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (7, 'Software Developer', 'Tmobile', '2020-06-20', '2020-06-20', 1, NULL, NULL, 'CO', NULL, NULL, NULL);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (8, 'Software Developer', 'Twilio', '2020-06-20', '2020-06-20', 1, 'https://chu.tbe.taleo.net/chu01/ats/careers/v2/myJobs?org=IRTC&cws=38', NULL, 'CO', NULL, NULL, NULL);
INSERT INTO `application` (`id`, `title`, `company_name`, `apply_date`, `create_date`, `user_id`, `description`, `contact_name`, `state`, `city`, `zip_code`, `enabled`) VALUES (9, 'Software Developer', 'FBI', '2020-06-20', '2020-06-20', 1, 'https://chu.tbe.taleo.net/chu01/ats/careers/v2/myJobs?org=IRTC&cws=38', NULL, 'CO', NULL, NULL, NULL);

COMMIT;


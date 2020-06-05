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
  PRIMARY KEY (`id`))
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
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (1, 'Bob', 'Sall', 'bs@gmail.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (2, 'Tim', 's', 'ts@yahoo.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (3, 'Test', 's', 'bg@outlook.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (4, 'Bill', 's', 'sall@tim.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (5, 'Tom', 's', 'grow@yahoo.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (6, 'Sally', 's', 'bigsalt@outlook.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (7, 'Oprah', 's', 'needmore@yahoo.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (8, 'Winfrey', 's', 'tooltime@yahoo.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (9, 'Joseph', 's', 's@yahoo.com');
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`) VALUES (10, 'Thomas', 'Z', 'd@yahoo.com');

COMMIT;


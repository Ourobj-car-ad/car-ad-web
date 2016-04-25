-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 139.129.132.60    Database: ad
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car_ad`
--

DROP TABLE IF EXISTS `car_ad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_ad` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `price` varchar(45) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `advertiser_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `play_times` int(50) NOT NULL DEFAULT '0',
  `remain_times` int(255) NOT NULL,
  `regions` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `create_time` (`create_time`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_ad`
--

LOCK TABLES `car_ad` WRITE;
/*!40000 ALTER TABLE `car_ad` DISABLE KEYS */;
INSERT INTO `car_ad` VALUES (1,'2016-04-19 17:38:02','2016-04-19 17:38:02','0','2016-04-19 17:38:02','2016-04-19 17:38:02',1,'肯德基吮指原味鸡，就在曹安公路4800号！',0,0,NULL),(2,'2016-04-19 17:38:18','2016-04-19 17:38:18','0','2016-04-19 17:38:18','2016-04-19 17:38:18',1,'学厨师，就到新东方烹饪学校！',0,0,NULL),(3,'2016-04-19 17:38:27','2016-04-19 17:38:27','0','2016-04-19 17:38:27','2016-04-19 17:38:27',1,'水可载舟,亦可赛艇.',0,0,NULL),(4,'2016-04-19 18:04:51','2016-04-19 18:04:51','0','2016-04-19 18:04:51','2016-04-19 18:04:51',1,'So Easy!',0,0,NULL),(5,'2016-04-25 10:39:54','2016-04-25 10:39:54','5000','2016-04-14 00:00:00','2016-04-19 00:00:00',8,'test',500,500,' 青浦区 杨浦区'),(6,'2016-04-25 10:36:13','2016-04-25 10:36:13','10000','2016-04-04 00:00:00','2016-04-12 00:00:00',8,'aa',500,500,' 普陀区 嘉定区'),(7,'2016-04-25 09:22:41','2016-04-25 09:22:41','10000','2016-04-12 00:00:00','2016-04-21 00:00:00',8,'ww',500,500,' 普陀区'),(8,'2016-04-25 10:39:34','2016-04-25 10:39:34','5000','2016-04-14 00:00:00','2016-04-19 00:00:00',8,'test',500,500,' 青浦区 杨浦区'),(9,'2016-04-25 12:00:48','2016-04-25 12:00:48','5000','2016-04-13 00:00:00','2016-04-15 00:00:00',8,'123456',1000,1000,' 长宁区 青浦区'),(10,'2016-04-25 12:08:54','2016-04-25 12:08:54','5000','2016-04-12 00:00:00','2016-04-14 00:00:00',8,'海鲜!',500,500,' 嘉定区');
/*!40000 ALTER TABLE `car_ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_ad_to_audit`
--

DROP TABLE IF EXISTS `car_ad_to_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_ad_to_audit` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `price` varchar(45) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `advertiser_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `play_times` int(50) NOT NULL DEFAULT '0',
  `regions` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `create_time` (`create_time`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_ad_to_audit`
--

LOCK TABLES `car_ad_to_audit` WRITE;
/*!40000 ALTER TABLE `car_ad_to_audit` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_ad_to_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_admin`
--

DROP TABLE IF EXISTS `car_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '',
  `password` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_admin`
--

LOCK TABLES `car_admin` WRITE;
/*!40000 ALTER TABLE `car_admin` DISABLE KEYS */;
INSERT INTO `car_admin` VALUES (2,'admin','admin');
/*!40000 ALTER TABLE `car_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_advertiser`
--

DROP TABLE IF EXISTS `car_advertiser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_advertiser` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '',
  `password` varchar(45) NOT NULL DEFAULT '',
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `money` varchar(45) NOT NULL DEFAULT '0',
  `real_name` varchar(45) NOT NULL,
  `alipay` varchar(45) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_advertiser`
--

LOCK TABLES `car_advertiser` WRITE;
/*!40000 ALTER TABLE `car_advertiser` DISABLE KEYS */;
INSERT INTO `car_advertiser` VALUES (8,'ww','ww','ww','ww',NULL,'0','ww','ww',NULL);
/*!40000 ALTER TABLE `car_advertiser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_advertiser_login_record`
--

DROP TABLE IF EXISTS `car_advertiser_login_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_advertiser_login_record` (
  `id` int(10) NOT NULL,
  `time` datetime NOT NULL,
  `advertiser_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_advertiser_login_record`
--

LOCK TABLES `car_advertiser_login_record` WRITE;
/*!40000 ALTER TABLE `car_advertiser_login_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_advertiser_login_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_income_and_expense`
--

DROP TABLE IF EXISTS `car_income_and_expense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_income_and_expense` (
  `id` int(10) NOT NULL,
  `time` datetime NOT NULL,
  `if_income` tinyint(1) NOT NULL,
  `if_expense` tinyint(1) NOT NULL,
  `amount` varchar(45) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_income_and_expense`
--

LOCK TABLES `car_income_and_expense` WRITE;
/*!40000 ALTER TABLE `car_income_and_expense` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_income_and_expense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_order`
--

DROP TABLE IF EXISTS `car_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_order` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `create_time` datetime NOT NULL,
  `status` tinyint(11) NOT NULL,
  `update_time` datetime NOT NULL,
  `per_price` varchar(45) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `advertiser_id` int(11) NOT NULL,
  `region_name` varchar(100) NOT NULL,
  `context` varchar(999) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_order`
--

LOCK TABLES `car_order` WRITE;
/*!40000 ALTER TABLE `car_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_region`
--

DROP TABLE IF EXISTS `car_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_region` (
  `id` int(10) NOT NULL,
  `region_name` varchar(45) NOT NULL,
  `region_address` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_region`
--

LOCK TABLES `car_region` WRITE;
/*!40000 ALTER TABLE `car_region` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_user`
--

DROP TABLE IF EXISTS `car_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `car_travel_code` varchar(45) NOT NULL,
  `identity_number` varchar(45) DEFAULT '1',
  `real_name` varchar(45) NOT NULL,
  `alipay` varchar(45) NOT NULL,
  `car_code` varchar(45) DEFAULT NULL,
  `car_image` varchar(100) DEFAULT NULL,
  `earnings` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_user`
--

LOCK TABLES `car_user` WRITE;
/*!40000 ALTER TABLE `car_user` DISABLE KEYS */;
INSERT INTO `car_user` VALUES (6,'11','11','11','11','11','1','11','11','11',NULL,0),(7,'ww','ww','ww','ww','ww','1','ww','ww','ww',NULL,0),(8,'22','22','22','22','22','1','22','22','22',NULL,0),(9,'33','33','33','33','33','1','33','33','33',NULL,0),(10,'44','44','44','44','44','1','44','44','44',NULL,0);
/*!40000 ALTER TABLE `car_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_user_login_record`
--

DROP TABLE IF EXISTS `car_user_login_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_user_login_record` (
  `id` int(10) NOT NULL,
  `time` datetime NOT NULL,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_user_login_record`
--

LOCK TABLES `car_user_login_record` WRITE;
/*!40000 ALTER TABLE `car_user_login_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_user_login_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-25 13:38:22

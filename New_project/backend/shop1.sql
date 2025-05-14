-- phpMyAdmin SQL Dump
-- version 2.11.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 07, 2025 at 10:42 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `shop1`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(45) NOT NULL,
  `location` varchar(250) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `location`) VALUES
(1, 'Dior', 'kivuye'),
(2, 'Dior', 'kivuye'),
(3, 'Dior', 'kivuye'),
(4, 'uer', 'uuw'),
(6, 'munyana', 'gasabo'),
(7, 'munyana', 'gasabo'),
(8, 'Mugisha', 'gasabo'),
(9, 'yvety uwiduhaye', 'nyamagabe'),
(10, 'rudahigwa fideli', 'uganda'),
(11, 'muhawenimana aline', 'kayonza'),
(12, 'mushikiwabo', 'newyork'),
(13, 'Mukagacyiga', 'uganda');

 
  DROP TABLE IF EXISTS `tbl_admins`;
CREATE TABLE `tbl_admins` (
  `username` VARCHAR(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

  DROP TABLE IF EXISTS `tbl_crimes`;

CREATE TABLE `tbl_crimes` (
  `crime` VARCHAR(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `date` VARCHAR(255 )NOT NULL,
  `status` datetime NOT NULL,
   `report` varchar(255) NOT NULL,
   `coordinates` varchar(255) NOT NULL,
  PRIMARY KEY (`crime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




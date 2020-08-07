
DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

USE gallery;

CREATE TABLE placeToStay
(
  id int AUTO_INCREMENT NOT NULL,
  placeName varchar (255) NOT NULL,
  location varchar (255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE pictures
(
  id INT AUTO_INCREMENT NOT NULL,
  images varchar (255) NOT NULL,
  caption varchar(255) NOT NULL,
  stay_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (stay_id) REFERENCES placeToStay(id)
);



CREATE TABLE ratings
(
  id int AUTO_INCREMENT NOT NULL,
  number_Of_Reviews INT NOT NULL,
  stars INT NOT NULL,
  stay_id INT NOT NULL,
  superHost varchar (255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (stay_id) REFERENCES placeToStay(id)
);
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

INSERT INTO burgers (burger_name)
VALUES ("The Royal"), ("Croque Burger"), ("El Chilango");

SELECT * FROM burgers
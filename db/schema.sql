DROP DATABASE IF EXISTS netWorth_db;

CREATE DATABASE netWorth_db;
USE netWorth_db;

CREATE TABLE accounts
(
	id int NOT NULL AUTO_INCREMENT,
    date_com DATETIME DEFAULT now(),
    action_type varchar(255) NOT NULL,
    amount DECIMAL (13,2) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE expenses
(
	id int NOT NULL AUTO_INCREMENT,
    date_exp DATETIME DEFAULT now(),
	expense_type varchar(255) NOT NULL,
	ex_amount DECIMAL (13,2) NOT NULL,
	PRIMARY KEY (id)
);
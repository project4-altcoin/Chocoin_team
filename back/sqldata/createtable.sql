DROP DATABASE IF EXISTS chocoin_db;
CREATE DATABASE IF NOT EXISTS chocoin_db;

use chocoin_db;

CREATE TABLE IF NOT EXISTS usertable(
    userid VARCHAR(50) NOT NULL PRIMARY KEY,
    userpw VARCHAR(255) NOT NULL,
    index(userid)
)   engine=innoDB default charset=utf8mb4;
 
CREATE TABLE IF NOT EXISTS asset(
    pk int NOT NULL,
    userid VARCHAR(50) NOT NULL PRIMARY KEY,
    input int NOT NULL,
    output int NOT NULL,
    regdate DATE NOT NULL
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS ordertable(
    pk INT NOT NULL PRIMARY KEY,
    userid VARCHAR(50),
    price INT NOT NULL,
    qty INT NOT NULL,
    ordertype VARCHAR(50),
    active BOOLEAN,
    index(pk),
    index(userid)
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS transactions(
    a_orderid INT NOT NULL PRIMARY KEY,
    a_amount INT NOT NULL,
    a_commision INT NOT NULL,
    b_orderid INT NOT NULL,
    b_amount INT NOT NULL,
    b_commision INT NOT NULL
)   engine=innoDB default charset=utf8mb4;
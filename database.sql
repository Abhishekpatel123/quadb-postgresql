--/ in poduction no need to create db 
CREATE DATABASE blockchain_db;
--/c into blockchain_db

CREATE TABLE blockchain_tb( id SERIAL PRIMARY KEY, name VARCHAR(255), last VARCHAR(255), buy VARCHAR(255), sell VARCHAR(255), volume VARCHAR(255), base_unit VARCHAR(255) );
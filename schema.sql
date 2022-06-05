-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
drop database cows_db;
create database cows_db;
use cows_db;
-- CREATE YOUR TABLES
create table cows (
  id int auto_increment,
  name varchar(20),
  description varchar(200),
  primary key (id)
);
-- ADD RECORDS TO YOUR TABLE

insert into cows (name, description) values ("Buttercup", "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.");
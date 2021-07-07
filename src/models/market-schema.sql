
DROP TABLE IF EXISTS market;

CREATE TABLE market(
  id SERIAL PRIMARY KEY,
  objName varchar(255),
  objPrice varchar(255)
);


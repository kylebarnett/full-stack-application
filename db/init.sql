CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth_id TEXT,
  name VARCHAR,
  email VARCHAR,
  picture TEXT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users,
  title VARCHAR,
  content TEXT
);
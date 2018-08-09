INSERT INTO users (auth_id, name, email, picture)
values (${sub}, ${name}, ${email}, ${picture})
RETURNING *;

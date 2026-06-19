CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT, subject TEXT, content TEXT);
CREATE TABLE staff_users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);
INSERT INTO articles (subject, content) VALUES ('Mi primer articulo', 'Hola y bienvenido a mi primer articulo......');
INSERT INTO articles (subject, content) VALUES ('Mi segundo articulo', 'Hola y bienvenido a mi segundo articulo......');
INSERT INTO staff_users (username, password) VALUES ('martin', 'Bl4ck_s4bbath'), ('alberto', 'felicidades_por_llegar_aqui');

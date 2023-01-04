### Exercicios SQL
### Exercicio 1
a. Uma chave estrangeira, cria relação entre tabelas;

b. INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Filme emocionante, lindo!",
    10,
	"001"
);

c. Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'
O erro acontece pois o id passado nao corresponde a nenhum filme.

d. ALTER TABLE Movies DROP COLUMN rating;

e. Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails;
Deu erro pois o filme está com uma chave "foreign key"

### Exercicio 2
a. criei uma tabela com duas colunas, ela associa a tabela com a "movies" e "actor" utilizando uma foreign key.

C. Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
O id nao existe em nenhuma tabela pra ser feita relação.

d. Deu erro pois o ator/atriz está com uma chave "foreign key" relacionada.

### Exercicio 3 
a. O comando seleciona todas as informações da tabela Movies, depois ele relaciona as informações pelo on.

### CÓDIGOS
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
);
INSERT INTO Movies (id, title, sinopse, release_date, evaluation)
VALUES(
  "002", 
  "Pantera Negra: Wakanda Para Sempre",
  "Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje lutam para proteger sua nação das potências mundiais intervenientes após a morte do rei T'Challa.",
  "2022-11-10",
  10
);
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Filme emocionante, lindo!",
    10,
	"003"
);
SELECT * FROM Movies;
DELETE FROM Movies WHERE id="001";
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  320000,
  "1929-10-16",
  "female"
);
SELECT * FROM Actor;
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
SELECT * FROM MovieCast;
INSERT INTO MovieCast (movie_id, actor_id)
	VALUES(
    "001",
    "010"
);
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
SELECT m.id as movies_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
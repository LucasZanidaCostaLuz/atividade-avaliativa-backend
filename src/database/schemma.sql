CREATE DATABASE concursos;

\c concursos;

CREATE TABLE vaga (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numero_vagas INTEGER NOT NULL
);

CREATE TABLE candidato (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    nivel_escolaridade VARCHAR(50) NOT NULL,
    id_vaga INTEGER REFERENCES vaga(id) ON DELETE SET NULL
);

INSERT INTO vaga (nome, numero_vagas) VALUES
('Desenvolvedor Backend', 5),
('Desenvolvedor Frontend', 3),
('Analista de Sistemas', 2),
('Gerente de Projetos', 1);

INSERT INTO candidato(nome, cpf, nivel_escolaridade, id_vaga) VALUES
('Jorge', '17028978001', 'Médio', 1),
('Mateus', '16463697001', 'Superior', 3),
('Raphael', '65931109064', 'Mestrado', 2),
('Maria', '88018837066', 'Doutorado', 4);

ALTER TABLE vaga ADD COLUMN photo TEXT;
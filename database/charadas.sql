# Lembre-se de criar o banco de dados mysql
USE charadas;

# O model das tabelas de Pergunta, Resposta e Categoria já serão feitos pelos seus arquivos.js nessa pasta
# Alterando o necessário
ALTER TABLE pergunta
MODIFY createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE pergunta
MODIFY updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

# Inserindo dados em Perguntas
INSERT INTO pergunta(titulo, descricao, categoriaId)
VALUE('Charada #1', 'Qual é coisa, qual é ela, que tem dentes e não come, tem cabeça e não pensa?', 1);
INSERT INTO pergunta(titulo, descricao, categoriaId)
VALUE('Charada #2', ' O que é que anda com os pés na cabeça?', 2);
INSERT INTO pergunta(titulo, descricao, categoriaId)
VALUE('Charada #3', 'Qual é a coisa, qual é ela, que tem seis pernas e dois braços?', 1);
INSERT INTO pergunta(titulo, descricao, categoriaId)
VALUE('Charada #4', 'O que é que quanto mais se tira, maior fica?', 2);
INSERT INTO pergunta(titulo, descricao, categoriaId)
VALUE('Charada #5', 'O que é que é fino, corta mas não se vê?', 1);
INSERT INTO pergunta(titulo, descricao, categoriaId)
VALUE('Charada #6', 'Eu pertenço ao mês de dezembro, e não a qualquer outro mês. Eu não sou um feriado. O que eu sou?', 2);

# Verifique se os dados foram inseridos
SELECT * FROM pergunta;

# Alterando o necessário
ALTER TABLE resposta
MODIFY createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE resposta
MODIFY updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

# Inserindo dados em Respostas
INSERT INTO resposta(corpo, perguntaId)
VALUE('Um pente', 1);
INSERT INTO resposta(corpo, perguntaId)
VALUE('Um piolho', 2);
INSERT INTO resposta(corpo, perguntaId)
VALUE('Um homem montado a cavalo', 3);
INSERT INTO resposta(corpo, perguntaId)
VALUE('Um buraco', 4);
INSERT INTO resposta(corpo, perguntaId)
VALUE('Uma lâmina de barbear', 5);
INSERT INTO resposta(corpo, perguntaId)
VALUE("A letra 'd'", 6);

# Verifique se os dados foram inseridos
SELECT * FROM resposta;


# Alterando o necessário
ALTER TABLE categoria
MODIFY createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE categoria
MODIFY updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

# Inserindo dados em Categoria
INSERT INTO categoria(titulo)
VALUE('engraçadas');
INSERT INTO categoria(titulo)
VALUE('difíceis');

# Verifique se os dados foram inseridos
SELECT * FROM categoria;
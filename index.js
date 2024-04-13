const express = require("express"); // Importanto o express
const app = express(); // Instancia do express
const bodyParser = require("body-parser"); // Importando o body parser
const connection = require("./database/meudatabase"); // Importando a conexão
const Pergunta = require("./database/Pergunta"); // Importando o model Pergunta
const Resposta = require("./database/Resposta"); // Importando o model Resposta
const Categoria = require("./database/Categoria"); // Importando o model Categoria

// Estabelecendo a conexão
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  })
  .catch((msgErro) => {
    console.log("error" + msgErro);
  });

// Express use o EJS como View engine
app.set("view engine", "ejs");

// Utilize arquivos estaticos
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home
app.get("/", function (req, res) {
  var opcao = req.query.opcao; // Verifica se há um parâmetro 'opcao' na query

  Pergunta.findAll({
    // procure todas as perguntas e ordene elas
    raw: true,
    order: opcao === "antigos" ? [["id", "ASC"]] : [["id", "DESC"]], //DESC = decrescente || ASC = crescente
  }).then((perguntas) => {
    res.render("index", {
      // renderizar na tela
      perguntas: perguntas,
    });
  });
});

// Perguntas
app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    // procure pela pergunta que corresponde ao mesmo id do paramêtro
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      // pergunta foi achada

      Resposta.findAll({
        where: { perguntaId: pergunta.id }, // exibir todas as respostas que tenham o mesmo id da pergunta
      }).then((resposta) => {
        res.render("pergunta", {
          // renderizar na tela
          pergunta: pergunta,
          resposta: resposta,
        });
      });
    } else {
      // pergunta não encontrada
      res.redirect("/");
    }
  });
});

// Categorias
app.get("/categorias/", function (req, res) {
  Categoria.findAll({
    raw: true,
    order: [
      // busque por todas as categorias e ordene elas
      ["id", "ASC"], // ASC = crescente
    ],
  }).then((categorias) => {
    res.render("categoria", {
      // renderizar na tela
      categorias: categorias,
    });
  });
});

app.get("/categorias/:id", (req, res) => {
  var id = req.params.id;
  Categoria.findOne({
    // procure pela categoria que corresponde ao mesmo id do paramêtro
    where: { id: id },
  }).then((categoria) => {
    if (categoria != undefined) {
      // categoria achada

      Pergunta.findAll({
        where: { categoriaId: categoria.id }, //exibir todas as perguntas que tenham o mesmo id da categoria
      }).then((pergunta) => {
        res.render("categoriaRes", {
          // renderizar na tela
          categoria: categoria,
          pergunta: pergunta,
        });
      });
    } else {
      // categoria não encontrada
      res.redirect("/");
    }
  });
});

// Rodando o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor Rodando!");
});

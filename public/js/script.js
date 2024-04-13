const opcoes = document.querySelectorAll('.opcoes');
const btnEnviar = document.getElementById('enviarVoto')
let numeroSelecionado = 0

function Selecionar(index) {
  for (let i = 0; i < opcoes.length; i++) {
    if (i === index) {
      opcoes[i].classList.add('opcao-selecionada');
    } else {
      opcoes[i].classList.remove('opcao-selecionada');
    }
  }
}

for (let i = 0; i < opcoes.length; i++) {
  opcoes[i].addEventListener('click', () => {
    Selecionar(i);
    numeroSelecionado = i + 1
  });
}

btnEnviar.addEventListener('click', () => {
  console.log(numeroSelecionado)
  document.getElementsByTagName('body')[0].innerHTML = ''

  document.getElementsByTagName('body')[0].innerHTML = `

  <nav class="navbar navbar-dark">
    <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="/img/emojinerd.png"  alt="testadno" width="40px" height="40px">
        <h2 class="ml-2 mb-0" id="textNav">CHARADAS.COM</h2>
    </a>
    </nav>
    
  <div class="container-div">
        <strong>
            <a href="/" class="voltar-P">← Voltar para Home</a>
        </strong>
    </div>

  <div class="content-thankyou">    


    <div class="elemento-selecionado">
        <strong>
            <p class="selecionado">Você selecionou ${numeroSelecionado} de 5</p>
        </strong>
    </div>
    <h1 id="thankyou">Obrigado!</h1>

      <p id="agradecimento">
        Agradeço sua votação, ajuda em muito no nosso trabalho. Volte
        sempre para conferir mais charadas! 
      </p>      
    </div>
    
    <footer>
      <div id="rodapeSA">
        <p>2024 CHARADAS.COM. - Por Ana Cecília. </p>
      </div>
    </footer>
    `
})
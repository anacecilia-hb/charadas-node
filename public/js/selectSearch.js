function ordenarCharadas() {
    var selectElement = document.getElementById("procureCha");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;

    //pega a opção selecionada no index
    fetch("/?opcao=" + selectedOption)
    .then(response => response.text())
    .then(html => {
        //atualiza a lista de charadas
        document.body.innerHTML = html;
    });
}
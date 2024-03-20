/*
Questão 24: Como você pode adicionar um evento de clique a um elemento 
HTML em JavaScript?
*/

<button id="meuBotao">Clique aqui</button>

<script>
    // Obtendo uma referência para o botão
    let botao = document.getElementById("meuBotao");

    // Adicionando um evento de clique usando a propriedade onclick
    botao.onclick = function() {
        alert("Você clicou no botão!");
    };
</script>
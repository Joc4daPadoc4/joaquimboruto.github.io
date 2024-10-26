document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLista = document.querySelector('.lista-menu');
    const menuCheckbox = document.querySelector('.menu-checkbox');

    // Adiciona um listener de evento ao botão de alternância
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique no botão feche o menu
        menuLista.classList.toggle('show'); // Alterna a classe 'show' no menu
        menuCheckbox.checked = !menuCheckbox.checked; // Alterna o estado do checkbox
    });

    // Adiciona um listener ao checkbox
    menuCheckbox.addEventListener('change', function() {
        menuLista.classList.toggle('show', menuCheckbox.checked);
    });

    // Evento de clique fora do menu
    document.addEventListener('click', function(event) {
        // Verifica se o clique foi fora do botão do menu e da lista
        if (!menuToggle.contains(event.target) && !menuLista.contains(event.target)) {
            menuLista.classList.remove('show'); // Remove a classe 'show' se clicado fora
            menuCheckbox.checked = false; // Desmarca o checkbox
        }
    });
});

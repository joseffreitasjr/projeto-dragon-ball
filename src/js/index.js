// Objetivo: Ao clicar em um botão, marcar o personagem correspondente como selecionado.

const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character'); //[botão1, botão2, botão3, botão4, botão5]	

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove seleção interior dos botões e personagens (se houver)
        document.querySelector('.button.selected')?.classList.remove('selected');
        document.querySelector('.character.selected')?.classList.remove('selected');

        // Adiciona a seleção do botão clicado e ao personagem correspondente
        button.classList.add('selected');
        characters[index].classList.add('selected');
    });
});
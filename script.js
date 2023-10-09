// Captura os elementos select e o elemento de vídeo
var selectElements = [
    document.getElementById('select1'),
    document.getElementById('select2'),
    document.getElementById('select3'),
    document.getElementById('select4'),
    document.getElementById('select5'),
    document.getElementById('select6')
];
var videoPlayer = document.getElementById('videoPlayer');

// Adiciona um ouvinte de mudança a cada select
selectElements.forEach(function (selectElement) {
    selectElement.addEventListener('change', function () {
        var selectedOptionValue = selectElement.value;
        if (selectedOptionValue) {
            // Verifica se a opção selecionada é uma página HTML
            var isHTMLPage = selectedOptionValue.endsWith('.html');
            if (isHTMLPage) {
                // Abre a página em uma nova aba
                window.open(selectedOptionValue, '_blank');
            } else {
                // Define o src do elemento de vídeo
                videoPlayer.src = selectedOptionValue;

                // Exibe o vídeo
                videoPlayer.style.display = 'block';
            }
        } else {
            // Oculta o vídeo se nenhuma opção válida for selecionada
            videoPlayer.style.display = 'none';
        }
    });
});

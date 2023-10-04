// Captura os elementos select e o elemento de vídeo
var selectElement1 = document.getElementById('select1');
var selectElement2 = document.getElementById('select2');
var selectElement3 = document.getElementById('select3');
var selectElement4 = document.getElementById('select4');
var selectElement5 = document.getElementById('select5');
var selectElement6 = document.getElementById('select6');
var videoPlayer = document.getElementById('videoPlayer');

// Adiciona um ouvinte de mudança a cada select
selectElement1.addEventListener('change', function() {
    var selectedOptionValue = selectElement1.value;
    atualizarVideo(selectedOptionValue);
});

selectElement2.addEventListener('change', function() {
    var selectedOptionValue = selectElement2.value;
    atualizarVideo(selectedOptionValue);
});

selectElement3.addEventListener('change', function() {
    var selectedOptionValue = selectElement3.value;
    atualizarVideo(selectedOptionValue);
});

selectElement4.addEventListener('change', function() {
    var selectedOptionValue = selectElement4.value;
    if (selectedOptionValue === "combin.html") {
        // Abre "combin.html" em uma nova aba
        window.open("combin.html", "_blank");
    } else {
        // Chama a função para atualizar o vídeo com base na opção selecionada
        atualizarVideo(selectedOptionValue);
    }
});


selectElement5.addEventListener('change', function() {
    var selectedOptionValue = selectElement5.value;
    if (selectedOptionValue === "movim.html") {
        window.open("movim.html", "_blank");
    } else {
        atualizarVideo(selectedOptionValue);
    }
});

selectElement6.addEventListener('change', function() {
    var selectedOptionValue = selectElement6.value;
    if (selectedOptionValue === "cadastro.html") {
        window.open("cadastro.html", "_blank");
    } else {
        atualizarVideo(selectedOptionValue);
    }
});

// Função para atualizar o vídeo com base na opção selecionada
function atualizarVideo(selectedOptionValue) {
    // Verifica se uma opção válida foi selecionada
    if (selectedOptionValue) {
        // Define o src do elemento de vídeo com base na opção selecionada
        videoPlayer.src = selectedOptionValue;

        // Exibe o vídeo
        videoPlayer.style.display = 'block';
    } else {
        // Oculta o vídeo se nenhuma opção válida for selecionada
        videoPlayer.style.display = 'none';
    }
}

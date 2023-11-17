document.addEventListener('DOMContentLoaded', function() {
    var sourceText = document.getElementById('source-text');
    var resultText = document.getElementById('result-text');
    var convertButton = document.getElementById('go');

    convertButton.addEventListener('click', function() {
        var inputText = sourceText.value;
        var convertedText = convertToImages(inputText);
        resultText.innerHTML = convertedText;
    });

    function convertToImages(text) {

        var convertedText = '';
        for (var i = 0; i < text.length; i++) {
            var char = text[i].toLowerCase();
            if (char >= 'a' && char <= 'z') {
                
                var imagePath = 'images/' + char + '.png';
                
                convertedText += '<img src="' + imagePath + '" alt="' + char + '">';
            } else {
                
                convertedText += text[i];
            }
        }
        return convertedText;
    }
});

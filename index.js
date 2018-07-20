var anagramSets = {};
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
};

document.getElementById("findButton").onclick = function () {

        anagramSets = {};
        for (let i = 0; i < words.length; i++) {
            let currentWord = words[i];
            const alphabetizedCurrentWord = alphabetize(currentWord);

            if (!anagramSets[alphabetizedCurrentWord]) {
                anagramSets[alphabetizedCurrentWord] = []
            };
            anagramSets[alphabetizedCurrentWord].push(currentWord);
        };    

    for (let currentWord of Object.keys(anagramSets)) {
        if (anagramSets[currentWord].length > 4) {
            const wordArray = anagramSets[currentWord];
            const words = document.createTextNode(wordArray);
            newResult = document.getElementById('result');
            newResult.appendChild(words);
            console.log(wordArray);
        }
    }
}

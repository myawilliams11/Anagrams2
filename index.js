





multiAnagram = {}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
};

function sets() {
    for (i = 0; i < words.length; i++) {
        if (multiAnagram.hasOwnProperty(alphabetize(words[i]))) {
            let addValue = alphabetize(words[i]);
            multiAnagram[addValue].push(words[i]);
        } else {
            let newProperty = alphabetize(words[i]);
            multiAnagram[newProperty] = [words[i]];
        };
    };
    newWords();
}


function newWords() {
    const result = document.getElementById('result');
    for (let property in multiAnagram) {
        if (anagramSets.hasOwnProperty(property) && anagramSets[property].length >= 5) {
            const newDiv = document.createElement('div');
            let anagIdentify = document.createTextNode(property + ': ');
            newDiv.append(anagIdentify);
            for (let i = 0; i < multiAnagram[property].length; i++) {
                let newTextNode = document.createTextNode(multiAnagram[property][i] + ' ');
                newDiv.appendChild(newTextNode);
            }
            result.appendChild(newDiv);
        }
    }
}

sets();
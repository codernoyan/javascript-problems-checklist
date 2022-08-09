// count vowels from a string / sentence

function countVowel(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (let i = 0; i < sentence.length; i++){
        const index = i;
        const vowel1 = sentence[index];
        for (let j = 0; j < vowels.length; j++){
            const index = j;
            const vowel2 = vowels[index];
            if (vowel1 === vowel2) {
                count++;
            }
        }
    }
    return count;
}

const sentence = 'Bangladesh is a small country but has a huge population';

const result = countVowel(sentence);
console.log(result);
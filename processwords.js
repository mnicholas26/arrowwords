function createWords(blob)
{
    let rows = blob.split('\n');
    let words = [];
    for(let i = 0; i < rows.length; i++)
    {
        let word = {};
        word.word = rows[i].trim();
        //word.scrabblemetric = scrabbleMetric(word.word);
        words.push(word);
    }
    return words;
}
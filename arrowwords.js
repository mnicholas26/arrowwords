window.onload = function()
{
    console.log("skeleton setup");

    //words file parsing and creation
    var words = text.split('\n');
    var newwords = [];
    for(let i = 0; i < words.length; i++)
    {
        let parts = words[i].split(' ');
        let word = {};
        if(parts[3] == undefined) continue;
        let neaten = parts[2].slice(1,-1);
        word.word = neaten;
        let clue = "";
        for(let j = 3; j < parts.length; j++)
        {
            clue = clue + " " + parts[j];
        }
        clue = clue.trim();
        word.clue = clue;
        newwords.push(word);
    }

    var output = document.getElementById('output');
    output.width = "800px";
    output.value = JSON.stringify(newwords);

}
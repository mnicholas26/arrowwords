//this outputs a grid object
function createGridObject(template, words)
{
    var grid = [];
    var refgrid = [];
    var rows = template.context.split('\n');
    //parse context to find clue's positions, types, id and fill our reference grid
    for(let i = 0; i < rows.length; i++)
    {
        var elems = rows[i].trim().split(' ');
        for(let j = 0; j < elems.length; j++)
        {
            let clue = {};
            refgrid.push(elems[j]);
            if(isNaN(elems[j])) continue;
            clue.position = {x: j, y: i};
            clue.type = elems[j];
            clue.id = grid.length;
            grid.push(clue);
        }
    }

    //find word coordinates and add possible words
    for(let i = 0; i < grid.length; i++)
    {
        let width = template.width;
        let height = template.height;
        let wordcords = [];
        if(grid[i].type == 0)
        {
            for(let j = grid[i].position.x; j < width; j++)
            {
                if(refgrid[(width*(grid[i].position.y - 1)) + j] == 'x')
                    wordcords.push({x: j, y: grid[i].position.y - 1});
                else break;
            }
        }
        else if(grid[i].type == 1)
        {
            for(let j = grid[i].position.x + 1; j < width; j++)
            {
                if(refgrid[(width*grid[i].position.y) + j] == 'x')
                    wordcords.push({x: j, y: grid[i].position.y});
                else break;
            }
        }
        else if(grid[i].type == 2)
        {
            for(let j = grid[i].position.x; j < width; j++)
            {
                if(refgrid[(width*(grid[i].position.y + 1)) + j] == 'x')
                    wordcords.push({x: j, y: grid[i].position.y + 1});
                else break;
            }
        }
        else if(grid[i].type == 3)
        {
            for(let j = grid[i].position.y; j < height; j++)
            {
                if(refgrid[(width*j) + (grid[i].position.x - 1)] == 'x')
                    wordcords.push({x: grid[i].position.x - 1, y: j});
                else break;
            }
        }
        else if(grid[i].type == 4)
        {
            for(let j = grid[i].position.y + 1; j < height; j++)
            {
                if(refgrid[(width*j) + grid[i].position.x] == 'x')
                    wordcords.push({x: grid[i].position.x, y: j});
                else break;
            }
        }
        else if(grid[i].type == 5)
        {
            for(let j = grid[i].position.y; j < height; j++)
            {
                if(refgrid[(width*j) + (grid[i].position.x + 1)] == 'x')
                    wordcords.push({x: grid[i].position.x + 1, y: j});
                else break;
            }
        }
        grid[i].wordcords = wordcords;
        //instanciate unreferenced person version
        let newwords = [];
        for(let i = 0; i < words.length; i++)
        {
            if(words[i].word.length == wordcords.length)
            {
                let out = {};
                out.word = words[i].word;
                out.scrabblemetric = scrabbleMetric(words[i].word);
                if(words[i].clues instanceof Array) out.clues = words[i].clues.slice(0);
                newwords.push(out);
            }
        }
        grid[i].possiblewords = newwords;
    }

    //find intersections
    for(let i = 0; i < grid.length; i++)
    {
        grid[i].intersections = [];
        let intpos = []
        for(let j = 0; j < grid[i].wordcords.length; j++)
        {
            let x = grid[i].wordcords[j].x;
            let y = grid[i].wordcords[j].y;
            for(let k = 0; k < grid.length; k++)
            {
                for(let l = 0; l < grid[k].wordcords.length; l++)
                {
                    let coord = grid[k].wordcords[l];
                    if(coord.x == x && coord.y == y && k != i)
                    {
                        grid[i].intersections.push({elem: grid[k], thispos: j, otherpos: l});
                        //grid[i].possiblewords = words.filter((e) => {return e.word.length == grid[i].wordcords.length});
                        intpos.push(j);
                    }
                }
            }
        }
        
    }

    return grid;
}

function wordAnalysis(grid)
{
    let allletters = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

    let prev = 0;
    let now = 0;
    for(let i = 0; i < grid.length; i++)
    {
        prev += grid[i].possiblewords.length;
        for(let j = 0; j < grid[i].intersections.length; j++)
        {
            let int = grid[i].intersections[j];
            let otherelem = int.elem;
            let words = otherelem.possiblewords;
            let letters = allletters.slice(0);
            for(let k = 0; k < words.length; k++)
            {
                let letter = words[k].word.charAt(int.otherpos);
                let index = letters.indexOf(letter);
                if(index > -1) letters.splice(index, 1);
            }
            for(let k = 0; k < letters.length; k++)
            {
                let betterwords = []
                for(let l = 0; l < grid[i].possiblewords.length; l++)
                {
                    if(!(grid[i].possiblewords[l].word.charAt(int.thispos) == letters[k]))
                    {
                        betterwords.push(grid[i].possiblewords[l])
                    }
                }
                grid[i].possiblewords = betterwords;
            }
        }
        now += grid[i].possiblewords.length;
    }
    return grid;
}

function advancedWordAnalysis(grid)
{
    for(let i = 0; i < grid.length; i++)
    {
        let ints = grid[i].intersections.slice(0);
        /*if(ints.length == grid[i].wordcords.length)
        {
            let mappedwords = [];
            for(let j = 0; j < possiblewords.length; j++)
            {
                mappedwords.push([possiblewords[j]]);
            }
            grid[i].possiblewords = mappedwords;
        }
        else*/
        if(ints.length != grid[i].wordcords.length)
        {
            let clueformat = "";
            for(let j = 0; j < grid[i].wordcords.length; j++)
            {
                if(ints.length == 0) clueformat += "*";
                else if(ints[0].thispos != j) clueformat += "*";
                else
                {
                    clueformat += "#";
                    ints.shift();
                }
            }
            let possiblewords = grid[i].possiblewords;
            let patterns = [];
            grid[i].possiblewords = [];
            for(let j = 0; j < possiblewords.length; j++)
            {
                let word = possiblewords[j];
                let format = clueformat;
                for(let k = 0; k < clueformat.length; k++)
                {
                    if(clueformat.charAt(k) == '#')
                    {
                        //format.charAt(k) = word.word.charAt(k);
                        format = format.substr(0, k) + word.word.charAt(k) + format.substr(k+1);
                    }
                }
                let index = -1;
                patternuniqueness:
                for(let k = 0; k < patterns.length; k++)
                {
                    if(patterns[k].format == format)
                    {
                        index = k;
                        break patternuniqueness;
                    }
                }
                if(index > -1) patterns[index].words.push(word);
                else
                {
                    let pattern = {};
                    pattern.format = format;
                    pattern.scrabblemetric = scrabbleMetric(format);
                    pattern.words = [word];
                    patterns.push(pattern);
                }
            }
            grid[i].possiblewords = patterns;
        }
    }
    return grid;
}

function printGrid(grid)
{
    return JSON.stringify(grid, null, 2);
}

function scrabbleMetric(word)
{
    let output = 0;
    for(let i = 0; i < word.length; i++)
    {
        output += letterValue(word.charAt(i));
    }
    return output;
}

function letterValue(letter)
{
    letter = letter.toLowerCase();
    if(letter == '*') return 0;
    else if(letter == 'a' || letter == 'e' || letter == 'i'
    || letter == 'l' || letter == 'n' || letter == 'o'
    || letter == 'r' || letter == 's' || letter == 't' || letter == 'u') return 1;
    else if(letter == 'd' || letter == 'g') return 2;
    else if(letter == 'b' || letter == 'c' || letter  == 'm' || letter == 'p') return 3;
    else if(letter == 'f' || letter == 'h' || letter == 'v'
    || letter == 'w' || letter == 'y') return 4;
    else if(letter ==  'k') return 5;
    else if(letter == 'j' || letter == 'x') return 8;
    else if(letter == 'q' || letter == 'z') return 10;
    else return -10000;
}
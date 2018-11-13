window.onload = function()
{
    //gridtemplate merely describes the dom element grid and tells us num rows and cols
    var gridtemplate = document.getElementById('grid');
    var grid;

    /*words.sort((e, f) => {return (e.word.toLowerCase() > f.word.toLowerCase()) ? 1 : -1});
    let output = [];
    let tempwords = [];
    for(let i = 0; i < words.length; i++)
    {
        let index = tempwords.indexOf(words[i].word);
        if(index >= 0)
        {
            output[index].clues = output[index].clues.concat(words[i].clues);
        }
        else
        {
            output.push(words[i]);
            tempwords.push(words[i].word);
        }
    }
    console.log(words);
    console.log(output);
    let out = document.createElement('textarea');
    document.body.appendChild(out);
    out.value = JSON.stringify(output,null,2)*/

    //context v1
    //arrow upright = 0
    //right = 1
    //downright = 2
    //leftdown = 3
    //down = 4
    //rightdown = 5
    var templatechoice = 3;
    var templates = [];
    var template1 = {width: 13, height: 23};
    template1.context = `5 x 4 4 x 3 4 x 3 5 x 5 x
    1 x x x x x x x 4 4 x 4 x
    1 x x x x 1 x x x x x x x
    1 x x x x 1 x x x x x x x
    x x x x x x x x x x 4 x 4
    0 4 x 4 x 4 x 1 x x x x x
    x x x x x x x 4 x 4 x 4 x
    0 x 4 x 4 x 1 x x x x x x
    1 x x x x x x x 1 x x x x
    x x x x x x 1 x x x x x x
    0 4 x 4 x 4 4 x 1 x x x x
    x x x x x x x 5 x 4 x 4 x
    0 x 1 x x x x 1 x x x x x
    x x x x x x x x x x 4 x 4
    0 x 1 x x x x 1 x x x x x
    x x x x 4 4 x 1 x x x x x
    0 4 1 x x x x x 4 4 x 4 x
    x x x x x x 4 1 x x x x x
    0 x 1 x x x x x x x 4 x 4
    x x x x x 4 x 1 x x x x x
    0 x 1 x x x x 1 x x x x x
    x x x x 1 x x x x 1 x x x
    0 x 1 x x x x 1 x x x x x`
    templates.push(template1);
    
    var template2 = {width: 5, height: 8};
    template2.context = `x 4 x 4 x
    1 x x x x
    x x x x x
    1 x x x x
    x x x x x
    1 x x x x
    1 x x x x
    1 x x x x`
    templates.push(template2);

    var template3 = {width: 16, height: 10};
    template3.context = `- - - - 5 x 4 4 x 3 x 3 4 4 x 3
    - - - - 1 x x x x 1 x x x x x 4
    5 x 5 x 1 x x x x x x 1 x x x x
    x x x x 1 x x x x 1 x x x x x x
    0 x 1 x x x x 4 x 4 x 4 4 x 4 x
    x x x x 4 4 1 x x x x x x x x x
    0 x 1 x x x x x 1 x x x x x x 4
    x x x x x x 1 x x x 1 x x x x x
    0 x 1 x x x x x 1 x x x 1 x x x
    1 x x x x x 1 x x x 1 x x x x x`;
    templates.push(template3)

    var template4 = {width: 10, height: 8};
    template4.context = `5 x 5 x 5 x 4 4 5 x
    1 x x x x x x x x x
    2 x 4 x 1 x x x 4 x
    x x x x 1 x x x x x
    1 x x x x x x 4 x 4
    1 x x x 1 x x x x x
    x x x x 1 x x x x x
    0 x 1 x x x x x x x`
    templates.push(template4);

    //this outputs a grid object
    //grid object contains clue object, location of clue, word necessary, etc
    function createGridObject(template)
    {
        var grid = [];
        var refgrid = [];
        var rows = template.context.split('\n');
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
                grid.push(clue);
            }
        }
        //find word
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
            //grid[i].possiblewords = words.filter((e) => {return e.word.length == wordcords.length});
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
            
            //word analysis
            let possiblewords = words.filter((e) => {return e.word.length == grid[i].wordcords.length});
            let patterns = [];
            grid[i].possiblewords = [];
            if(intpos.length == grid[i].wordcords.length)
            {
                grid[i].possiblewords = possiblewords;
            }
            else
            {
                for(let j = 0; j < possiblewords.length; j++)
                {
                    let word = possiblewords[j];
                    let regex = '';
                    for(let k = 0; k < word.word.length; k++)
                    {
                        if(intpos.includes(k)) regex += word.word.charAt(k);
                        else regex += '[a-z]';
                    }
                    if(!patterns.includes(regex))
                    {
                        patterns.push(regex);
                    }
                }
                for(let j = 0; j < patterns.length; j++)
                {
                    grid[i].possiblewords.push([possiblewords.filter((e) => {return e.word.match(patterns[j])})]);
                }
            }
        }
        return grid;
    }

    Array.prototype.shuffle = function() {
        var input = this;
        for (let i = input.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex]; 
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    }

    grid = createGridObject(templates[templatechoice]);
    //populateGrid(grid);
    console.log(grid);

    function populateGrid(grid)
    {
        grid.sort((e, f) => {
            return f.intersections.length - e.intersections.length;
        });
        for(let i = 0; i < grid.length; i++)
        {
            grid[i].id = i;
            grid[i].possiblewords.shuffle();
        }
        for(let i = 0; i < grid.length; i++)
        {
            grid[i].intersections.sort((e, f) => {
                return f.elem.id - e.elem.id;
            });
        }
        recursiveFill(grid, 0);
    }

    function recursiveFill(grid, index)
    {
        //if(index > 14) console.log("16 deep");
        if(index >= grid.length) return -1;
        let words = grid[index].possiblewords;
        let intersections = grid[index].intersections;
        //constrain array
        for(let i = 0; i < intersections.length; i++)
        {
            if(intersections[i].elem.id < index)
            {
                words = words.filter(e => {
                    return e.word.charAt(intersections[i].thispos) == intersections[i].elem.word.word.charAt(intersections[i].otherpos);
                });
            }
        }
        //check if return
        if(words.length == 0) return index-1;
        let instruction;
        for(let i = 0; i < words.length; i++)
        {
            grid[index].word = words[i];
            instruction = recursiveFill(grid, index+1);
            if(instruction == index) continue;
            else if(instruction == -1 && index == 0) break;
            else if(instruction < index) return instruction;
        }
        if(index == 0 && instruction == -1) console.log("FINISHED");
        else if(index == 0) console.log("cannot make puzzle");
        else return index-1;
    }
}
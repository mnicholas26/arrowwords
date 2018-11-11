window.onload = function()
{
    //filter template for clues
    //let words5 = words.filter((e) => {return e.word.length == 5});

    //gridtemplate merely describes the dom element grid and tells us num rows and cols
    var gridtemplate = document.getElementById('grid');
    var grid;

    //context v1
    //arrow upright = 0
    //right = 1
    //downright = 2
    //leftdown = 3
    //down = 4
    //rightdown = 5
    var context = `5 x 4 4 x 3 4 x 3 5 x 5 x
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

    context = `x 4 x 4 x
    1 x x x x
    x x x x x
    1 x x x x
    x x x x x
    1 x x x x
    1 x x x x
    1 x x x x`

    //this outputs a grid object
    //grid object contains clue object, location of clue, word necessary, etc
    function createGridObject(context)
    {
        var grid = [];
        var refgrid = [];
        var rows = context.split('\n');
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
            let width = 5;
            let height = 8;
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
            grid[i].possiblewords = words.filter((e) => {return e.word.length == wordcords.length});

        }

        //find intersections
        for(let i = 0; i < grid.length; i++)
        {
            grid[i].intersections = [];
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
                        }
                    }
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

    grid = createGridObject(context);
    populateGrid(grid);
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
        recursiveFill(grid, 0);
    }

    function recursiveFill(grid, index)
    {
        console.log(index);
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
        if(words.length == 0)
        {
            intersections.sort((e, f) => {
                return f.elem.id - e.elem.id;
            });
            //console.log(index);
            //console.log(intersections);
            return intersections[0].elem.id;
        }
        let instruction;
        for(let i = 0; i < words.length; i++)
        {
            grid[index].word = words[i];
            instruction = recursiveFill(grid, index+1);
            if(instruction == index) continue;
            else if(instruction == -1 && index == 0) break;
            else if(instruction < index)
            {
                //grid[index].word = undefined;
                return instruction;
            }
        }
        if(index == 0 && instruction == -1) console.log("FINISHED");
        else if(index == 0) console.log("cannot make puzzle");
        else
        {
            //grid[index].word = undefined;
            return index-1;
        }
    }
}
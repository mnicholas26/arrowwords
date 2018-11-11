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
            let width = 13;
            let height = 23;
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

    grid = createGridObject(context);
    populateGrid(grid);
    console.log(grid);

    function contextualiseGrid(grid)
    {

    }
    
    function populateGrid(grid)
    {
        let newgrid = intersectionSort(grid);
        for(let i = 0; i < newgrid.length; i++)
        {
            let filteredwords = newgrid[i].possiblewords;
            filteredwords = constraintFilter(newgrid[i].intersections, filteredwords);
            if(filteredwords.length > 0)
            {
                let randword = filteredwords[Math.floor(Math.random() * filteredwords.length)];
                newgrid[i].word = randword;
            }
            else
            {
                if(!backtrack(newgrid[i])) i-=2;
            }
            
        }
    }

    function backtrack(elem)
    {
        let backtrackarray = elem.intersections.map(e => e.elem);
        backtrackarray = backtrackarray.filter((e) => { return e.word != undefined});
        backtrackarray = intersectionSort(backtrackarray);
        console.log(backtrackarray);
    }

    function intersectionSort(array)
    {
        return array.sort((e,f) => {return f.intersections.length - e.intersections.length});
    }

    function constraintFilter(intersections, words)
    {
        for(let i = 0; i < intersections.length; i++)
        {
            let intersection = intersections[i];
            let intword = intersection.elem.word;
            if(intword == undefined) continue;
            words = words.filter((e) => {
                return e.word.charAt(intersection.thispos) == intword.word.charAt(intersection.otherpos);
            });
        }
        return words;
    }

    /*function queryGrid(coord, grid)
    {
        let output = grid.filter((e) => {return e.wordcords.includes(coord)}
    }*/
}
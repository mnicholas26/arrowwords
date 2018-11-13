//this outputs a grid object
function createGridObject(template)
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

    //find word coordinates
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
                        grid[i].intersections.push({id: grid[k].id, thispos: j, otherpos: l});
                        //grid[i].possiblewords = words.filter((e) => {return e.word.length == grid[i].wordcords.length});
                        intpos.push(j);
                    }
                }
            }
        }
        
    }
    return grid;
}

function wordAnalysis(grid, words)
{
    for(let i = 0; i < grid.length; i++)
    {
        let intpos = grid[i].intersections.map(e => e.thispos);
        let possiblewords = words.filter((e) => {return e.word.length == grid[i].wordcords.length});
        let patterns = [];
        grid[i].possiblewords = [];
        if(intpos.length == grid[i].wordcords.length)
        {
            grid[i].possiblewords = possiblewords.map(e => [e]);
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
                let reduced = possiblewords.filter((e) => {return e.word.match(patterns[j])});
                grid[i].possiblewords.push(reduced);
            }
        }
    }
    return grid;
}

function printGrid(grid)
{
    return JSON.stringify(grid, null, 2);
}
window.onload = function()
{
    //test grid gen
    const templatechoice = 3;
    
    /*let out = document.createElement('textarea');
    document.body.appendChild(out);
    out.value = printGrid(grid);*/
    
    //var grid = grid1;

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

    grid = createGridObject(templates[templatechoice], words);
    let before, after;
    do
    {
        before = 0;
        after = 0;
        for(let i = 0; i < grid.length; i++)
        {
            before += grid[i].possiblewords.length;
        }
        grid = wordAnalysis(grid);
        for(let i = 0; i < grid.length; i++)
        {
            after += grid[i].possiblewords.length;
        }
    } 
    while(before != after);
    console.log(after)

    /*grid = advancedWordAnalysis(grid);
    console.log(grid);
    let after2 = 0;
    for(let i = 0; i < grid.length; i++)
    {
        after2 += grid[i].possiblewords.length;
    }
    console.log(after2);*/

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
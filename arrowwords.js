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

    function average(arr)
    {
        let total = 0;
        let len = arr.length;
        for(let i = 0; i < len; i++)
        {
            total += arr[i];
        }
        return total/len;
    }

    var records = [];
    for(let i = 0; i < 20; i++)
    {
        records.push(testing());
    }
    let gridgen = records.map(e => e.gridgen);
    console.log("Call to createGribObject took on average " + average(gridgen) + " milliseconds.");
    let wordanal = records.map(e => e.wordanal);
    console.log("Call to wordAnalysis took on average " + average(wordanal) + " milliseconds.");
    let advwordanal = records.map(e => e.advwordanal);
    console.log("Call to advancedWordAnalysis took on average " + average(advwordanal) + " milliseconds.");
    let popgrid = records.map(e => e.popgrid);
    console.log("Call to populateGrid took on average " + average(popgrid) + " milliseconds.");

    function testing()
    {

    let record = {};

    var t0 = performance.now();
    var grid = createGridObject(templates[templatechoice], words);
    var t1 = performance.now();
    //console.log("Call to createGribObject took " + (t1 - t0) + " milliseconds.");
    record.gridgen = t1 - t0;
    t0 = performance.now();
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
    t1 = performance.now();
    //console.log("Call to wordAnalysis took " + (t2 - t1) + " milliseconds.");
    record.wordanal = t1 - t0;
    t0 = performance.now();
    //console.log(after);

    grid = advancedWordAnalysis(grid);
    t1 = performance.now();
    //console.log("Call to advancedWordAnalysis took " + (t3 - t2) + " milliseconds.");
    record.advwordanal = t1 - t0;
    t0 = performance.now();
    //console.log(grid);
    /*let after2 = 0;
    for(let i = 0; i < grid.length; i++)
    {
        after2 += grid[i].possiblewords.length;
    }
    console.log(after2);*/

    grid = populateGrid(grid);
    t1 = performance.now();
    //console.log("Call to populateGrid took " + (t4 - t3) + " milliseconds.");
    record.popgrid = t1 - t0;
    //console.log(grid);

    return record;
    }

    function populateGrid(grid)
    {
        //step 1 setup grid in most efficient way for iteration
        //this method goes most intersections to least
        //wanna try breadth first search web with intersections % as tiebreaker
        grid.sort((e, f) => {
            return f.intersections.length - e.intersections.length;
        });
        //we shuffle before sorting because we want words that tie to be in a random order
        //to preserve some sense of randomness
        for(let i = 0; i < grid.length; i++)
        {
            grid[i].possiblewords.shuffle();
            grid[i].possiblewords.sort((e, f) => {
                return e[0].scrabblemetric - f[0].scrabblemetric;
            });
            grid[i].id = i;
        }
        for(let i = 0; i < grid.length; i++)
        {
            grid[i].intsbefore = [];
            grid[i].intsafter = [];
            for(let j = 0; j < grid[i].intersections.length; j++)
            {
                let int = grid[i].intersections[j];
                if(i > int.elem.id) grid[i].intsbefore.push(int);
                else grid[i].intsafter.push(int);
            }
        }
        grid.usedwords = [];
        recursiveFill(grid, 0);
        return grid;
    }

    function recursiveFill(grid, index)
    {
        if(index >= grid.length) return -1;
        let words = constrainWords(grid, index);
        //check if return
        if(words.length == 0)
        {
            grid[index].word = undefined;
            grid.usedwords.pop();
            return index-1;
        }
        let instruction;
        for(let i = 0; i < words.length; i++)
        {
            //if(index == 0) console.log(i);
            grid[index].word = words[i][Math.floor(Math.random()*words[i].length)];
            if(grid.usedwords.includes(grid[index].word.word)) continue;
            let skip = forwardChecking(grid, index);
            if(skip) continue;
            grid.usedwords.push(grid[index].word.word);
            instruction = recursiveFill(grid, index+1);
            if(instruction == index) continue;
            else if(instruction == -1 && index == 0) break;
            else if(instruction < index) return instruction;
        }
        //if(instruction == -1 && index == 0) console.log("FINISHED");
        //else if(index == 0) console.log("cannot make puzzle");
        //else 
        //{
            grid[index].word = undefined;
            grid.usedwords.pop();
            return index-1;
        //}
    }

    function constrainWords(grid, index)
    {
        let words = grid[index].possiblewords;
        let intersections = grid[index].intsbefore;
        for(let i = 0; i < intersections.length; i++)
        {
            let otherword = grid[intersections[i].elem.id].word;
            if(otherword == undefined) continue;
            let otherletter = otherword.word.charAt(intersections[i].otherpos);
            let thispos = intersections[i].thispos;
            words = words.filter(e => {
                return e[0].word.charAt(thispos) == otherletter;
            });
        }
        return words;
    }

    function forwardChecking(grid, index)
    {
        let skip = false;
        for(let i = 0; i < grid[index].intsafter.length; i++)
        {
            let words = constrainWords(grid, grid[index].intsafter[i].elem.id);
            if(words.length == 0)
            {
                skip = true;
                break;
            }
        }
        return skip;
    }
}
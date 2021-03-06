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

function newgrid()
{

    //test grid gen
    const templateoptions = [3, 4]
    const templatechoice = templateoptions[Math.floor(Math.random()*2)];
    //const templatechoice = 4;

    //let newwords = createWords(biggerwords);
    //let words = newwords;
    //let words = words1.concat(newwords);
    let words = words1;

    var t0 = performance.now();
    var grid = createGridObject(templates[templatechoice], words);
    var t1 = performance.now();
    console.log("Call to createGribObject took " + (t1 - t0) + " milliseconds.");
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
    console.log("Call to wordAnalysis took " + (t1 - t0) + " milliseconds.");
    t0 = performance.now();
    //console.log(after);
    grid = advancedWordAnalysis(grid);
    t1 = performance.now();
    console.log("Call to advancedWordAnalysis took " + (t1 - t0) + " milliseconds.");
    t0 = performance.now();
    /*let after2 = 0;
    for(let i = 0; i < grid.length; i++)
    {
        after2 += grid[i].possiblewords.length;
    }
    console.log(after2);*/

    grid = populateGrid(grid);
    t1 = performance.now();
    console.log("Call to populateGrid took " + (t1 - t0) + " milliseconds.");
    console.log(grid);

    //assign clues
    for(let i = 0; i < grid.length; i++)
    {
        let clues = grid[i].word.clues;
        if(clues != undefined) grid[i].clue = clues[Math.floor(Math.random()*clues.length)];
    }

    //setup gameobject
    var gameobject = {
        cells: [],
        currentindex: 0,
        currentcell: undefined
    };

    //front end stuff
    let gridview = createGridView(grid);
    let container = document.getElementById('grid');
    container.appendChild(gridview);
    gameobject.view = gridview;
    setupIO(grid, gameobject);
    //console.log(gameobject);
    //printGrid(grid, gridview);
}

function populateGrid(grid)
{
    //step 1 setup grid in most efficient way for iteration
    grid = sortGrid(grid);
    //sort possible words by scrabblemetric
    //we shuffle before sorting because we want words that tie to be in a random order
    //to preserve some sense of randomness
    for(let i = 0; i < grid.length; i++)
    {
        grid[i].possiblewords.shuffle();
        /*grid[i].possiblewords.sort((e, f) => {
            return e.scrabblemetric - f.scrabblemetric;
        });*/
        grid[i].id = i;
        grid[i].counter = undefined;
    }
    //split intersections into ints before and after
    //constrain words only cares about ints before
    //forward checking only cares about ints after
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
    //recursiveFill(grid, 0);
    iterativeFill(grid);
    return grid;
}

function iterativeFill(grid)
{
    let backtrack = false;
    let usedwords = [];
    mainloop:
    for(let i = 0; i < grid.length; )
    {
        if(backtrack)
        {
            grid[i].wordindex++;
            //if(i == 0) console.log(grid[i].wordindex);
            backtrack = false;
        }
        else
        {
            grid[i].constrainedwords = constrainWords(grid[i]);
            grid[i].wordindex = 0;
            if(grid[i].constrainedwords.length == 0)
            {
                grid[i].word = undefined;
                usedwords.pop();
                i-=1;
                backtrack = true;
                continue;
            }
        }
        let words = grid[i].constrainedwords;
        for(let j = grid[i].wordindex; j < words.length; j++)
        {
            grid[i].word = words[j][Math.floor(Math.random()*words[j].length)];
            if(usedwords.includes(grid[i].word.word)) continue;
            if(forwardChecking(grid[i])) continue;
            usedwords.push(grid[i].word.word);
            if(i == grid.length-1)
            {
                console.log("FINISHED");
                break mainloop;
            }
            else
            {
                grid[i].wordindex = j;
                i++;
                continue mainloop;
            }
        }
        if(i == 0)
        {
            console.log("cannot make puzzle");
            break;
        }
        else
        {
            grid[i].word = undefined;
            usedwords.pop();
            grid[i].wordindex = 0;
            i-=1;
            backtrack = true;
            continue;
        }
    }
}

function recursiveFill(grid, index)
{
    if(index >= grid.length) return -1;
    let words = constrainWords(grid[index]);
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
        if(forwardChecking(grid[index])) continue;
        grid.usedwords.push(grid[index].word.word);
        instruction = recursiveFill(grid, index+1);
        if(instruction == index) continue;
        else if(instruction == -1 && index == 0) break;
        else if(instruction < index) return instruction;
    }
    if(instruction == -1 && index == 0) console.log("FINISHED");
    else if(index == 0) console.log("cannot make puzzle");
    else 
    {
        grid[index].word = undefined;
        grid.usedwords.pop();
        return index-1;
    }
}

function constrainWords(gridelem)
{
    let words = gridelem.possiblewords;
    let intersections = gridelem.intsbefore;
    for(let i = 0; i < intersections.length; i++)
    {
        let otherword = intersections[i].elem.word;
        if(otherword == undefined) continue;
        let otherletter = otherword.word.charAt(intersections[i].otherpos);
        let thispos = intersections[i].thispos;
        /*words = words.filter(e => {
            return e[0].word.charAt(thispos) == otherletter;
        });*/
        let tempwords = [];
        for(let i = 0; i < words.length; i++)
        {
            if(words[i][0].word.charAt(thispos) == otherletter) tempwords.push(words[i]);
        }
        words = tempwords;
        //this line should be readded at some point because it is a theoretical speedup
        //if(words.length == 0) return words;
    }
    return words;
}

function forwardChecking(gridelem)
{
    let skip = false;
    for(let i = 0; i < gridelem.intsafter.length; i++)
    {
        let words = constrainWords(gridelem.intsafter[i].elem);
        if(words.length == 0)
        {
            skip = true;
            break;
        }
    }
    return skip;
}

function sortGrid(grid)
{
        //this method goes most intersections to least
    /*grid.sort((e, f) => {
        return f.intersections.length - e.intersections.length;
    });*/
    //sort via intersection web
    //i.e do words which give us the largest int before array possible
    //step 1 find word with most intersections
    let max = 0;
    let maxelem;
    let newgrid = [];
    newgrid.width = grid.width;
    newgrid.height = grid.height;
    let ids = [];
    for(let i = 0; i < grid.length; i++)
    {
        if(grid[i].intersections.length > max)
        {
            max = grid[i].intersections.length;
            maxelem = grid[i];
        }
    }
    newgrid.push(maxelem);
    ids.push(maxelem.id);
    for(let i = 0; i < grid.length-1; i++)
    {
        max = 0;
        let numints = 0;
        for(let j = 0; j < grid.length; j++)
        {
            grid[j].counter = 0;
        }
        let ints = [];
        //grab all intersections off elems in newgrid
        for(let j = 0; j < newgrid.length; j++)
        {
            for(let k = 0; k < newgrid[j].intersections.length; k++)
            {
                ints.push(newgrid[j].intersections[k].elem);
            }
        }
        //remove ints which are in newgrid already, increment counter otherwise
        let betterints = [];
        for(let j = 0; j < ints.length; j++)
        {
            if(!ids.includes(ints[j].id))
            {
                ints[j].counter++;
                betterints.push(ints[j]);
            }
        }
        //which is the most frequently occuring id
        //this tells us the element that intersects with the most in newgrid
        //tiebreak based on number of intersections
        for(let j = 0; j < betterints.length; j++)
        {
            if(betterints[j].counter >= max 
                && betterints[j].intersections.length > numints)
                {
                    max = betterints[j].counter;
                    numints = betterints[j].intersections.length;
                    maxelem = betterints[j];
                }
        }
        //add that element to newgrid
        newgrid.push(maxelem);
        ids.push(maxelem.id);
    }
    return newgrid;
}

function endGame(gameobject)
{
    //check how many clues you got right
    //display this as a score with the time
    //if you newgame delete grid and make new game
    clearInterval(gameobject.timer);
    /*let gridarea = document.getElementById('grid');
    while(gridarea.childNodes.length > 0)
    {
        gridarea.removeChild(gridarea.childNodes[0]);
    }*/
    gameobject.view.parentElement.removeChild(gameobject.view);
    document.removeEventListener('keydown', (e) => {handleKey(e, gameobject)});
    //this needs to be changed when i make the system more statelike
    document.getElementById('grid-autolockbtn').classList.remove('locked');
    gameobject = undefined;
    newgrid();
}

window.onload = function()
{   
    newgrid();
}
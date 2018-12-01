function createGridView(grid)
{
    //create dom elements
    let table = document.createElement('table');
    for(let i = 0; i < grid.height; i++)
    {
        let row = document.createElement('tr');
        for(let j = 0; j < grid.width; j++)
        {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    table.className = "grid";
    table.style.width = 0;
    //contextualise grid
    for(let i = 0; i < grid.length; i++)
    {
        let pos = grid[i].position;
        let x = pos.x;
        let y = pos.y;
        let cell = table.childNodes[y].childNodes[x];
        cell.className = "clue";
        if(grid[i].word.clues != undefined) cell.textContent = grid[i].clue;
        else cell.textContent = "lorem fucking ipsum";
        let arrow = document.createElement('img');
        arrow.classList.add("arrow");
        switch (grid[i].type)
        {
            case "0":
                arrow.style.left = 0;
                arrow.style.bottom = "100%";
                arrow.src = "images/arrow-upright.svg";
                break;
            case "1":
                arrow.style.left = "100%";
                arrow.style.bottom = 0;
                arrow.src = "images/arrow-right.svg";
                break;
            case "2":
                arrow.style.left = 0;
                arrow.style.top = "100%";
                arrow.src = "images/arrow-downright.svg";
                break;
            case "3":
                arrow.style.left = "-100%";
                arrow.style.top = 0;
                arrow.src = "images/arrow-leftdown.svg";
                break;
            case "4":
                arrow.style.left = 0;
                arrow.style.top = "100%";
                arrow.src = "images/arrow-down.svg";
                break;
            case "5":
                arrow.style.left = "100%";
                arrow.style.top = 0;
                arrow.src= "images/arrow-rightdown.svg";
                break;
        }
        cell.appendChild(arrow);
    }
    return table;
}

function setupIO(grid, gameobject)
{
    document.body.addEventListener('mousedown', () => {
        toggleHighlight(gameobject);
        clearSelected(gameobject);
    });
    let table = gameobject.view;
    for(let i = 0; i < table.childNodes.length; i++)
    {
        let row = table.childNodes[i];
        for(let j = 0; j < row.childNodes.length; j++)
        {
            let cell = {
                type: "",
                x: j,
                y: i,
                up: undefined,
                down: undefined,
                left: undefined,
                right: undefined,
                wordindex: 0,
                words: [],
                domelement: row.childNodes[j],
                get word()
                {
                    return this.words[this.wordindex];
                }
            }
            let output = getWords(grid, j, i);
            cell.type = output.type;
            cell.words = output.words;
            if(cell.words.length == 0)
            {
                row.childNodes[j].className = "empty";
            }
            gameobject.cells.push(cell);
        }
    }
    let cells = gameobject.cells;
    let width = gameobject.width = grid.width;
    let height = gameobject.height = grid.height;
    for(let i = 0; i < cells.length; i++)
    {
        let cell = cells[i];
        if(cell.type == "letter")
        {
            //test up
            let testindex = i - width;
            if(testindex > 0 && cells[testindex].type == "letter") cell.up = cells[testindex];
            //down
            testindex = i + width;
            if(testindex < (height * width) 
                && cells[testindex].type == "letter") cell.down = cells[testindex];
            //left
            if((i % width) != 0 && cells[i-1].type == "letter") cell.left = cells[i-1];
            //right
            testindex = i + 1;
            if((testindex % width) != 0 
                && cells[testindex].type == "letter") cell.right = cells[testindex];
            //next and prev
            for(let j = 0; j < cell.words.length; j++)
            {
                let word = cell.words[j];
                //if horizontal
                if(word.direction == 0)
                {
                    if(word.index != 0) word.prev = cells[i-1];
                    if(word.index != word.gridelem.wordcords.length-1) word.next = cells[i+1];
                }
                //if vertical
                else
                {
                    if(word.index != 0) word.prev = cells[i-width];
                    if(word.index != word.gridelem.wordcords.length-1) word.next = cells[i+width];
                }
                let x = word.gridelem.position.x;
                let y = word.gridelem.position.y;
                word.clue = cells[(y*width) + x];
            }
            cell.domelement.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                selectCell(gameobject, cell, true);
            });

        }
        else if(cell.type == "clue")
        {
            let coords = cell.word.gridelem.wordcords;
            cell.word.next = cells[(coords[0].y*width) + coords[0].x];
            cell.domelement.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                selectCell(gameobject, cell.word.next, true);
            });
        }
    }
    document.addEventListener('keydown', (e) => {handleKey(e, gameobject)});
}

function getWords(grid, x, y)
{
    let output = {
        type: "empty",
        words: []
    }
    let words = [];
    for(let i = 0; i < grid.length; i++)
    {
        if(x == grid[i].position.x && y == grid[i].position.y)
        {
            output.type = "clue";
            words.push({
                gridelem: grid[i], 
                index: 0
            });
            break;
        }
        for(let j = 0; j < grid[i].wordcords.length; j++)
        {
            if(x == grid[i].wordcords[j].x && y == grid[i].wordcords[j].y)
            {
                output.type = "letter";
                //dir 0 = horizontal 1 = vertical
                let direction = 0;
                let testindex = 0;
                if(j == 0) testindex = 1;
                if(grid[i].wordcords[testindex].x == x) direction = 1;
                words.push({
                    gridelem: grid[i],
                    index: j,
                    direction: direction,
                    letter: grid[i].word.word.charAt(j)
                });
                break;
            }
        }
    }
    output.words = words;
    return output;
}

function toggleWord(cell)
{
    if(cell != undefined)
    {
        cell.wordindex = cell.words.length-cell.wordindex-1;
    }
}

function selectCell(gameobject, cell, clicked)
{
    toggleHighlight(gameobject);
    let oldcell = gameobject.currentcell
    if(clicked)
    {
        if(cell == oldcell) toggleWord(cell);
        else
        {
            if(cell.words.length == 2)
            {
                if(cell.words[0].index < cell.words[1].index) cell.wordindex = 0;
                else cell.wordindex = 1;
            }
        }
    }
    else if(oldcell != undefined)
    {
        let word = cell.word;
        if(cell == oldcell) toggleWord(cell);
        else if(cell == oldcell.left || cell == oldcell.right)
        {
            if(word.direction != 0) toggleWord(cell);
        }
        else if(cell == oldcell.up || cell == oldcell.down)
        {
            if(word.direction != 1) toggleWord(cell);
        }
    }
    gameobject.previouscell = oldcell;
    //if(cell.type == "clue") cell = cell.words[0].next;
    gameobject.currentcell = cell;
    toggleHighlight(gameobject);
}

function toggleHighlight(gameobject)
{
    let cell = gameobject.currentcell;
    if(cell != undefined)
    {
        let word = cell.word;
        let coords = word.gridelem.wordcords;
        for(let i = 0; i < coords.length; i++)
        {
            let viewcell = gameobject.view.childNodes[coords[i].y].childNodes[coords[i].x];
            viewcell.classList.toggle('selected-word');
            if(i == word.index) viewcell.classList.toggle('selected-cell');
        }
    }
}

function handleKey(e, gameobject)
{
    switch(e.key)
    {
        case "Escape":
            toggleHighlight(gameobject);
            clearSelected(gameobject);
            break;
        //handle movement
        case "ArrowLeft":
            moveSelected(gameobject, "left");
            break;
        case "ArrowRight":
            moveSelected(gameobject, "right");
            break;
        case "ArrowUp":
            moveSelected(gameobject, "up");
            break;
        case "ArrowDown":
            moveSelected(gameobject, "down");
            break;
        //handle deletion and movement
        case "Backspace":
            deleteSelected(gameobject, "prev");
            break;
        case "Delete":
            deleteSelected(gameobject, "next");
            break;
        //handle switching direction
        case " ":
            toggleHighlight(gameobject);
            toggleWord(gameobject.currentcell);
            toggleHighlight(gameobject);
            break;
        case "Tab":
            if(gameobject.currentcell != undefined)
            {
                e.preventDefault();
                if(e.shiftKey) cycleClue(gameobject, "backward");
                else cycleClue(gameobject, "forward");
            }
            break;
        case "1":
            printGrid(gameobject);
            break;
        case "2":
            printClue(gameobject, gameobject.currentcell);
            break;
        case "3":
            printLetter(gameobject.currentcell);
            break;
        //handle letters
        default:
            handleLetter(gameobject, e.key);
            break;
    }
}

function moveSelected(gameobject, dir)
{
    if(gameobject.currentcell == undefined) return;
    let newcell = gameobject.currentcell[dir];
    if(newcell != undefined) selectCell(gameobject, newcell);
}

function deleteSelected(gameobject, dir)
{
    if(gameobject.currentcell == undefined) return;
    let cell = gameobject.currentcell;
    cell.domelement.textContent = "";
    let newcell = cell.word[dir];
    if(newcell != undefined) selectCell(gameobject, newcell);
}

function cycleClue(gameobject, dir)
{
    if(gameobject.currentcell == undefined) return;
    let cell = gameobject.currentcell;
    let clue = cell.word.clue;
    let height = gameobject.height;
    let width = gameobject.width;
    let index = (clue.y*width) + clue.x;
    do
    {
        if(dir == "forward") index++
        else index--;
        index = (index+(height*width)) % (height*width);
    }
    while(gameobject.cells[index].type != "clue");
    selectCell(gameobject, gameobject.cells[index].word.next, true);
}

function handleLetter(gameobject, letter)
{
    if(gameobject.currentcell == undefined) return;
    let cell = gameobject.currentcell;
    letter = letter.toLowerCase();
    if(letter == "a" || letter == "b" || letter == "c" || letter == "d"
    || letter == "e" || letter == "f" || letter == "g" || letter == "h"
    || letter == "i" || letter == "j" || letter == "k" || letter == "l"
    || letter == "m" || letter == "n" || letter == "o" || letter == "p"
    || letter == "q" || letter == "r" || letter == "s" || letter == "t"
    || letter == "u" || letter == "v" || letter == "w" || letter == "x"
    || letter == "y" || letter == "z") 
    {
        cell.domelement.textContent = letter;
        let newcell = cell.word.next;
        if(newcell != undefined) selectCell(gameobject, newcell);
    }
}

function clearSelected(gameobject)
{
    gameobject.currentcell = undefined;
    gameobject.currentelem = undefined;
}

/*function printGrid(grid, table)
{
    for(let i = 0; i < grid.length; i++)
    {
        for(let j = 0; j < grid[i].wordcords.length; j++)
        {
            let letter = grid[i].word.word.charAt(j);
            printLetter(letter, grid[i].wordcords[j], table);
        }
    }
}

function printLetter(letter, position, table)
{
    let x = position.x;
    let y = position.y;
    let cell = table.childNodes[y].childNodes[x];
    cell.textContent = letter;
}

function printClue(gameobject, cell)
{
    if(cell == undefined) return;
    let word = cell.words[cell.wordindex];
    let coords = word.word.wordcords;
    for(let i = 0; i < coords.length; i++)
    {
        let viewcell = gameobject.view.childNodes[coords[i].y].childNodes[coords[i].x];
        viewcell.textContent = word.word.word.word.charAt(i);
    }
}*/

function printGrid(gameobject)
{
    for(let i = 0; i < gameobject.cells.length; i++)
    {
        let cell = gameobject.cells[i];
        if(cell.type == "letter") printLetter(cell);
    }
}

function printClue(gameobject, cell)
{
    if(cell == undefined) return;
    let coords = cell.word.gridelem.wordcords;
    for(let i = 0; i < coords.length; i++)
    {
        let coord = coords[i];
        cell = gameobject.cells[(coord.y * gameobject.width) + coord.x];
        printLetter(cell);
    }
}

function printLetter(cell)
{
    cell.domelement.textContent = cell.word.letter;
}
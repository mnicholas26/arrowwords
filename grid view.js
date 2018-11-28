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
                domelement: row.childNodes[j]
            }
            let output = getWords(grid, j, i);
            cell.type = output.type;
            cell.words = output.words;
            if(cell.words.length == 0)
            {
                row.childNodes[j].className = "empty";
            }
            else 
            {
                row.childNodes[j].addEventListener('mousedown', (e) => {
                    e.stopPropagation();
                    selectClue(gameobject, cell);
                });
            }
            gameobject.cells.push(words);
        }
    }
    let cells = gameobject.cells;
    for(let i = 0; i < cells.length; i++)
    {
        let cell = cells[i];
        let width = gameobject.width;
        let height = gameobject.height;
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
            if(i % width != 0 && cells[i-1].type == "letter") cell.left = cells[i-1];
            //right
            testindex = i + 1;
            if(testindex % width != 0 
                && cells[testindex].type == "letter") cell.right = cells[testindex];
            //next and prev
            for(let j = 0; j < cell.words.length; j++)
            {
                let word = cell.words[j];
                //if horizontal
                if(word.direction == 0)
                {
                    if(word.index != 0) word.prev = cells[i-1];
                    if(word.index != word.word.wordcords.length) word.next = cells[i+1];
                }
                //if vertical
                else
                {
                    if(word.index != 0) word.prev = cells[i-width];
                    if(word.index != word.word.wordcords.length) word.next = cells[i+width];
                }
            }

        }
        else continue;
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
                word: grid[i], 
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
                    word: grid[i],
                    index: j,
                    direction: direction
                });
                break;
            }
        }
    }
    output.words = words;
    return output;
}

function toggleWord(gameobject, x, y)
{
    let elem = gameobject.view.childNodes[y].childNodes[x];
    if(gameobject.currentelem == elem)
    {
        let cell = gameobject.currentcell;
        cell.index = cell.length-cell.index-1;
    }
    else gameobject.currentelem = elem;
}

function selectClue(gameobject, cell)
{
    toggleHighlight(gameobject);
    gameobject.currentcell = cell;
    toggleWord(gameobject, cell[cell.index].x, cell[cell.index].y);
    toggleHighlight(gameobject);
}

function toggleHighlight(gameobject)
{
    let cell = gameobject.currentcell;
    if(cell != undefined)
    {
        cell = cell[cell.index];
        let coords = cell.word.wordcords;
        for(let i = 0; i < coords.length; i++)
        {
            let viewcell = gameobject.view.childNodes[coords[i].y].childNodes[coords[i].x];
            viewcell.classList.toggle('selected-word');
            if(i == cell.wordindex) viewcell.classList.toggle('selected-cell');
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
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;
        //handle deletion and movement
        case "Backspace":
            break;
        case "Delete":
            break;
        //handle switching direction
        case "Space":
            break;
        //handle letters
        default:
            break;
    }
}

moveSelected(gameobject, dir)
{
    switch(dir)
    {
        case "left":
            break;
    }
}

function clearSelected(gameobject)
{
    gameobject.currentcell = undefined;
    gameobject.currentelem = undefined;
}

function printGrid(grid, table)
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
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
        gameobject.currentcell = undefined;
        gameobject.currentelem = undefined;
    });
    let table = gameobject.view;
    for(let i = 0; i < table.childNodes.length; i++)
    {
        let row = table.childNodes[i];
        for(let j = 0; j < row.childNodes.length; j++)
        {
            let words = getWords(grid, j, i);
            if(words.length == 0)
            {
                row.childNodes[j].className = "empty";
            }
            else 
            {
                gameobject.cells.push(words);
                //if(words[0].type == "clue")
                //{
                    row.childNodes[j].addEventListener('mousedown', (e) => {
                        e.stopPropagation();
                        selectClue(gameobject, words);
                    });
                //}
            }
        }
    }
}

function getWords(grid, x, y)
{
    let words = [];
    for(let i = 0; i < grid.length; i++)
    {
        if(x == grid[i].position.x && y == grid[i].position.y)
        {
            words.push({
                word: grid[i],
                type: "clue",
                wordindex: 0,
                x: x,
                y: y
            });
            break;
        }
        for(let j = 0; j < grid[i].wordcords.length; j++)
        {
            if(x == grid[i].wordcords[j].x && y == grid[i].wordcords[j].y)
            {
                words.push({
                    word: grid[i],
                    wordindex: j,
                    type: "letter",
                    x: x,
                    y: y
                });
                break;
            }
        }
    }
    words.index = 0;
    return words;
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
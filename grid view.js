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
    //contextualise grid
    for(let i = 0; i < grid.length; i++)
    {
        let pos = grid[i].position;
        let x = pos.x;
        let y = pos.y;
        let cell = table.childNodes[y].childNodes[x];
        cell.className = "clue";
        cell.textContent = "multiple words";
        let arrow = document.createElement('span');
        arrow.classList.add("arrow");
        arrow.classList.add("atype" + grid[i].type);
        let text;
        if(grid[i].type == 0) text = "↱";
        else if(grid[i].type == 1) text = "→";
        else if(grid[i].type == 2) text = "↳";
        else if(grid[i].type == 3) text = "⤥";
        else if(grid[i].type == 4) text = "↓";
        else text = "↴";
        arrow.textContent = text;
        cell.appendChild(arrow);
    }
    return table;
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
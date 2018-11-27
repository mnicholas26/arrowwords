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
        cell.textContent = "multiple fucking words";
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
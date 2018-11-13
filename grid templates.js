//context v1
//arrow upright = 0
//right = 1
//downright = 2
//leftdown = 3
//down = 4
//rightdown = 5
const templates = [
    {
        width: 13, 
        height: 23,
        context: `5 x 4 4 x 3 4 x 3 5 x 5 x
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
    },
    {
        width: 5, 
        height: 8,
        context: `x 4 x 4 x
1 x x x x
x x x x x
1 x x x x
x x x x x
1 x x x x
1 x x x x
1 x x x x`
    },
    {
        width: 16, 
        height: 10,
        context: `- - - - 5 x 4 4 x 3 x 3 4 4 x 3
- - - - 1 x x x x 1 x x x x x 4
5 x 5 x 1 x x x x x x 1 x x x x
x x x x 1 x x x x 1 x x x x x x
0 x 1 x x x x 4 x 4 x 4 4 x 4 x
x x x x 4 4 1 x x x x x x x x x
0 x 1 x x x x x 1 x x x x x x 4
x x x x x x 1 x x x 1 x x x x x
0 x 1 x x x x x 1 x x x 1 x x x
1 x x x x x 1 x x x 1 x x x x x`
    },
    {
        width: 10, 
        height: 8,
        context: `5 x 5 x 5 x 4 4 5 x
1 x x x x x x x x x
2 x 4 x 1 x x x 4 x
x x x x 1 x x x x x
1 x x x x x x 4 x 4
1 x x x 1 x x x x x
x x x x 1 x x x x x
0 x 1 x x x x x x x`
    }
]
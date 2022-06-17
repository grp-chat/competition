const sock = io();

var changesMade = false;
const table = document.getElementById("table");
var allStackers = [];


var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
    c21, c22, c23, c24, c25, c26, c27, c28, c29, c30;
var row1, row2, row3, row4, row5, row6, row7, row8, row9, row10;

var allRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10];

var allCells = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
    c21, c22, c23, c24, c25, c26, c27, c28, c29, c30];

/* allRows.forEach((row) => {

}); */

function Position(id, result) {
    this.id = id;
    this.result = result;
}

var pos1 = new Position("--", 0);
var pos2 = new Position("--", 0);
var pos3 = new Position("--", 0);
var pos4 = new Position("--", 0);
var pos5 = new Position("--", 0);
var pos6 = new Position("--", 0);
var pos7 = new Position("--", 0);
var pos8 = new Position("--", 0);
var pos9 = new Position("--", 0);
var pos10 = new Position("--", 0);

allPos = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10]


var j = 0;
for (var i = 1; i <= 10; i++) {
    allRows[i] = table.insertRow(i);
    allCells[j] = allRows[i].insertCell(0);
    allCells[j].innerHTML = i;
    j++;
    allCells[j] = allRows[i].insertCell(1);
    j++;
    allCells[j] = allRows[i].insertCell(2);
    j++;

    //cell1.innerHTML = i;

}

/* var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2); */

sock.on('postResult', data => {
    //test.innerHTML = data;
    //cell1.innerHTML = data[0].try1;

    allStackers = data;

    var j = 1;
    for (var i = 0; i < allStackers.length; i++) {
        allCells[j].innerHTML = allStackers[i].id;
        j++;
        allCells[j].innerHTML = allStackers[i].best;
        j++;
        j++;
    }

});


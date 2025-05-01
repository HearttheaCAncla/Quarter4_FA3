do {
    var inpu = parseInt(prompt("Input a Number"));
} while(isNaN(inpu) == true || inpu == null);

document.getElementById("loopy").innerHTML = "Number inputted: " + inpu;

let output = '';
let i = 0;
let c = 0;

if (inpu % 2 != 0){
    odd(inpu);

    function odd(n1) {
        rowc = n1;
        for (i=0; i<n1; i++) {
            for (c=0; c<rowc; c++) {
                output += inpu; 
            }
            output += '\n';
            inpu--;
        }
    }
}

else {
    even(inpu);

    function even(n1) {
        rowc = n1;
        for (i=0; i<n1; i++) {
            for (c=0; c<rowc; c++) {
                output += inpu;
            }
            output += '\n';
            inpu--;
            rowc--;
        }
    }   
}

document.getElementById("shape").innerHTML += '<pre>' + output + '</pre>';

let cont = [];
const max = 7;

function add(person) {
    if (person === "") return;

    if (cont.length === max) {
        cont.shift();
    }

    cont.push(person);
    displayContacts();
}

function del() {
    if (cont.length > 0) {
        cont.pop();
    }
    displayContacts();
}

function displayContacts() {
    let result = "";
    for (let i = 0; i < cont.length; i++) {
        result += cont[i];
        if (i < cont.length - 1) {
            result += " ";
        }
    }
    document.getElementById("conta").innerHTML = result;
}
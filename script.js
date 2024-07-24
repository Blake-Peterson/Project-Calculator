let first_num;
let operator;
let second_num;
const container = document.querySelector("#container");

function add(num1, num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(first_num,operation, second_num){
    if (operation === "+"){
        result=add(first_num,second_num);
    } else if (operation === "-"){
        result=subtract(first_num,second_num);
    } else if (operation === "*"){
        result=multiply(first_num,second_num);
    } else if(operation === "/"){
        result=divide(first_num,second_num);
    }
    return result;
}

function create_display(){
    const display = document.createElement("div");
    display.setAttribute("id","display");
    container.appendChild(display);
}

function create_calculator_button_layout(){
    let symbol="";
    for(let i=0;i<4;i++){
        const rows = document.createElement("div");
        container.appendChild(rows);
        for(let j=0;j<4;j++){
            const buttons = document.createElement("button");
            let number = (i*4)+j;
            if(number>9){
                switch(number){
                    case 10:
                        symbol="+";
                        break;
                    case 11:
                        symbol="-";
                        break;
                    case 12:
                        symbol="X";
                        break;
                    case 13:
                        symbol="/";
                        break;
                    case 14:
                        symbol=".";
                        break;
                    case 15:
                        symbol="=";
                        break;
                }
                buttons.textContent = symbol;
            } else{
                buttons.textContent = number.toString();
            }
            rows.appendChild(buttons);
        }
    }
}

function create_calculator(){
    create_display();
    create_calculator_button_layout();
}

create_calculator();
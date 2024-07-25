let first_num;
let operator;
let second_num;
const container = document.querySelector("#container");
let display_value = "";

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

function create_display(input){
    const display = document.createElement("div");
    display.textContent=input;
    display.setAttribute("id","display");
    container.appendChild(display);
}

function update_display(input){
    const display = document.getElementById('display');
    display_value = display_value+input;
    display.textContent = display_value;
}

function create_num_buttons(button_layout){
    const num_buttons_div = document.createElement("div");
    let number = 0;
    for(let i=0;i<3;i++){
        const rows = document.createElement("div");
        num_buttons_div.appendChild(rows);
        for(let j=0;j<3;j++){
            const buttons = document.createElement("button");
            number = (i*3)+j+1;
            buttons.textContent = number.toString();
            buttons.addEventListener("click",()=>update_display(buttons.textContent));
            rows.appendChild(buttons);
        }
    }
    const zero_button = document.createElement("button");
    zero_button.textContent = "0";
    zero_button.addEventListener("click",()=>update_display(zero_button.textContent));
    num_buttons_div.appendChild(zero_button);
    button_layout.appendChild(num_buttons_div);     
}

function create_operator_buttons(parent_div){
    const operater_div = document.createElement("div");
    for(let i=0;i<3;i++){
        const rows = document.createElement("div");
        operater_div.appendChild(rows);
        for(let j=0;j<2;j++){
            const buttons = document.createElement("button");
            let value = (i*2)+j;
            switch(value){
                case 0:
                    symbol = "+";
                    break;
                case 1:
                    symbol = "-";
                    break;
                case 2:
                    symbol = "*";
                    break;
                case 3:
                    symbol = "/";
                    break;
                case 4:
                    symbol = "=";
                    break;
                case 5:
                    symbol = ".";
                    break;    
            }
            buttons.textContent= symbol;
            rows.appendChild(buttons);   
        }
    }
    const clear_button = document.createElement("button");
    clear_button.textContent = "Clear";
    operater_div.appendChild(clear_button);
    parent_div.appendChild(operater_div);
}



function create_button_layout(){
    const button_layout = document.createElement("div");
    button_layout.classList.add("button_layout");
    container.appendChild(button_layout);
    create_num_buttons(button_layout);
    create_operator_buttons(button_layout);
}

function create_calculator(){
    create_display();
    create_button_layout();
}

create_calculator();
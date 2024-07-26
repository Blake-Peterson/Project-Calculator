let first_num;
let operator;
let second_num;
const container = document.querySelector("#container");
let display_value = "0";

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
        result=add(parseInt(first_num),parseInt(second_num));
    } else if (operation === "-"){
        result=subtract(parseInt(first_num),parseInt(second_num));
    } else if (operation === "*"){
        result=multiply(parseInt(first_num),parseInt(second_num));
    } else if(operation === "/"){
        result=divide(parseInt(first_num),parseInt(second_num));
    }
    first_num = result;
    second_num = "";
    operator="";
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
    
    if(operator){
        second_num+= input;
    } else{
        first_num += input;
    }

    if(input === "Clear"){
        display_value = "0";
    } else if(second_num && validate_operator(input)){
        operator_overflow(input);
    } else if(validate_operator(input)){
        operator = input;
    } else if (input === "="){
        display_value = operate(first_num,operator,second_num);
    }else {
        display_value = display_value+input;
    }

    display.textContent = display_value;
}

function validate_operator(oper){
    let valid_operators = "+-/*";
    for(let i=0;i<4;i++){
        if(valid_operators[i]===oper){
            return true;
        }
    }
    return false;
}

function operator_overflow(new_operator){
    if (first_num && operator && second_num){
        let result = operate(first_num,operator,second_num);
        operator = new_operator;
        first_num = result;
        second_num = "";
        return result;
    }
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
            buttons.addEventListener("click",()=> update_display(buttons.textContent));
            rows.appendChild(buttons);   
        }
    }
    const clear_button = document.createElement("button");
    clear_button.textContent = "Clear";
    clear_button.addEventListener("click",()=>update_display("Clear"));
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
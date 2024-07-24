let first_num;
let operator;
let second_num;

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
let display = document.getElementById("display");

let buttons = document.querySelectorAll(".number, .operator");


buttons.forEach(function(button){


    button.addEventListener("click",function(){


        display.value += button.value;


    });


});


document.getElementById("clear")
.addEventListener("click",function(){


    display.value="";


});


document.getElementById("delete")
.addEventListener("click",function(){


    display.value = display.value.slice(0,-1);


});


document.getElementById("equal")
.addEventListener("click",function(){

    let expression = display.value;

    if(expression==""){

       return;

    }

    
    let result;


    if(expression.includes("+")){


        result = eval(expression);


    }

    else if(expression.includes("-")){


        result = eval(expression);


    }

    else if(expression.includes("*")){


        result = eval(expression);


    }

    else if(expression.includes("/")){


        result = eval(expression);


    }

    else{

        result = expression;


    }

    display.value=result;

});
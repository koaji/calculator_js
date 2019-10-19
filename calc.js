var array = [];
var vArray = [];
var operator = '';
var operatorflg = false;

function addValue(val) {
    array.push(val);
    if (operator == '' || operatorflg) {
        result.innerHTML += String(val);
    } else if(operatorflg){
        result.innerHTML += String(val);
    } else {
        result.innerHTML = "calc:" + String(val);
        operatorflg = true;
    }
};

function clearDisplay() {
    result.innerHTML = "calc:";
}

function clear() {
    clearDisplay();
    array = []; 
    vArray = [];
    operatorflg = false;
    operator = '';
}

window.onload = function () {
    
    // 演算子
    document.getElementById("add").addEventListener("click", function(){
        arrayToNumber();
        if(operator != ''){
            vArray.push(operator);
        }
        operator = '+';
    });
    document.getElementById("sub").addEventListener("click", function(){
        arrayToNumber();
        if(operator != ''){
            vArray.push(operator);
        }
        operator = '-';
    });
    document.getElementById("mul").addEventListener("click", function(){
        arrayToNumber();
        if(operator != ''){
            vArray.push(operator);
        }
        operator = '*';
    });
    document.getElementById("div").addEventListener("click", function(){
        arrayToNumber();
        if(operator != ''){
            vArray.push(operator);
        }
        operator = '/';
    });

    //値
    document.getElementById("num1").addEventListener("click", function () {
        addValue(1);
    });
    document.getElementById("num2").addEventListener("click", function(){
        addValue(2);
    });
    document.getElementById("num3").addEventListener("click", function(){
        addValue(3);
    });
    document.getElementById("num4").addEventListener("click", function(){
        addValue(4);
    });
    document.getElementById("num5").addEventListener("click", function(){
        addValue(5);
    });
    document.getElementById("num6").addEventListener("click", function(){
        addValue(6);
    });
    document.getElementById("num7").addEventListener("click", function(){
        addValue(7);
    });
    document.getElementById("num8").addEventListener("click", function(){
        addValue(8);
    });
    document.getElementById("num9").addEventListener("click", function(){
        addValue(9);
    });
    document.getElementById("num0").addEventListener("click", function(){
        addValue(0);
    });
    document.getElementById("dot").addEventListener("click", function(){
        addValue('.');
    });

    // 配列から数値へ変換
    function arrayToNumber(){
        var tmp = 0;
        var carry = 1;
        var decPoint = 10; /*正数は10，少数になれば，0.1*/
        var i = 0;
        for(i = array.length - 1; i >= 0; i--){ // let iは使えない． 
            if(array[i] == '.'){
                tmp = tmp / carry
                carry = 1;
                //console.log("arrayToNumber" + tmp);
            }else{
                tmp += array[i] * carry;
                carry = carry * 10;
            }
        }
        vArray.push(tmp);
        array = [];
    }

    //デバッグ
    document.getElementById("show").addEventListener("click", function(){
       console.log("array: " + array);
        console.log("vArray:" + vArray);
    });

    // クリア
    document.getElementById("clear").addEventListener("click", function(){
        clear();
    });

    //計算
    document.getElementById("calc").addEventListener("click", function(){
        opArray = [];
        tmp = 0;

        arrayToNumber();
        if(operator != ""){
            vArray.push(operator);
        }
        console.log(vArray);
        var i = 0;

        for(i = 0; i < vArray.length; i++){
            value = vArray[i];
            //vArray.forEach((value) 使えない
            //console.log(value);
            switch(typeof(value))
            {
                case "string":
                    console.log("Operatpr:" + value);
                    switch(value)
                    {
                        case '+':
                            console.log("+  opArray :" + opArray);
                            tmp = opArray[0] + opArray[1];
                            opArray = [];
                            opArray.unshift(tmp);
                            console.log("+  opArray :" + opArray);
                            break;
                        case '-':
                            console.log("-  opArray :" + opArray);
                            tmp = opArray[0] - opArray[1];
                            opArray = [];
                            opArray.unshift(tmp);
                            console.log("-  opArray :" + opArray);
                            break;
                        case '*':
                            console.log("*  opArray :" + opArray);
                            tmp = opArray[0] * opArray[1];
                            opArray = [];
                            opArray.unshift(tmp);
                            console.log("*  opArray :" + opArray);
                            break;
                        case '/':
                            console.log("/  opArray :" + opArray);
                            tmp = opArray[0] / opArray[1];
                            opArray = [];
                            opArray.unshift(tmp);
                            console.log("/  opArray :" + opArray);
                            break;
                        default:
                            operator = "";
                            break;
                    }
                    break;
                case "number":
                    console.log("number:" + value);
                    opArray.push(value);
                    console.log("opArray :" + opArray);
                    break;
            }
        }
        console.log("CALC RESULT :" + opArray[0]);
        clear();
        result.innerHTML = "calc:" + opArray[0];
    });
}

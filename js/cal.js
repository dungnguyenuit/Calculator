/**
 * Created by HTC ONE X on 7/9/2015.
 */
var box = document.getElementById('display');
function addtoscreen(x){

        box.value += x;

        if(x == 'C'){

            box.value = '';
        }
    }
function cal(){

    x = box.value;
    x = eval(x);
    box.value = x;

}

function back(){

    var number = box.value;
    var len = number.length-1 ;
    var num = number.substring(0,len);
    box.value = num;

}

function pow(y){

    x = box.value;
    x = Math.pow(x,y);
    box.value = x;
}




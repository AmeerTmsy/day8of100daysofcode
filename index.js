
// ----------------- buttons ----------------//
const clearing = document.getElementById('clear');
const openPara = document.getElementById('openPara');
const closePara = document.getElementById('closePara');
const modulas = document.getElementById('modulas');

const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nien = document.getElementById('nien');
const divi = document.getElementById('divi');

const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const mult = document.getElementById('mult');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const subs = document.getElementById('subs');

const equal = document.getElementById('equal');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const sum = document.getElementById('sum');

// -------------- monitor -------------//
const monitor1 = document.getElementById('m1');
const monitor2 = document.getElementById('m2');
const monitor3 = document.getElementById('m3');
const dataing = document.getElementById('dataing');

// ------------- local variables -------------//
let dotstatus = false;
let num1 = 0;
let mum2 = 0;
let numberOneIs    = false;
let isOperateOn    = false;
let operatChangeOn = false;
let sumOn  = false;
let subsOn = false;
let diviOn = false;
let multOn = false;
let moniterStore1 = '';

function justShow(clik){
    if(numberOneIs === true ){
        moniterStore1 = clik;
        monitor3.innerHTML = moniterStore1;
        numberOneIs = false;
    }else{
        moniterStore1 = moniterStore1 + clik; 
        monitor3.innerHTML = moniterStore1;
    }
}
function showNum1(){
    numberOneIs = true;
    if(isOperateOn){
        monitor1.innerHTML = num1;
        isOperateOn = false;
    }else {
        num1 = parseInt(moniterStore1)
        monitor1.innerHTML = num1;
    }
    moniterStore1 = '';
    monitor3.innerHTML = moniterStore1;
}
function clearMonitor(){
    moniterStore1 = '';
    monitor1.innerHTML = "";
    monitor2.innerHTML = "";
    monitor3.innerHTML = moniterStore1;
    dotstatus = false;
    numberOneIs = false;
}

function fractioning(){
    moniterStore1 = moniterStore1 + '.'
    monitor3.innerHTML = moniterStore1;
    dotstatus = true;

}

function parenthesing(paraTyp){
    if(paraTyp === 1){
        moniterStore1 = moniterStore1 + '('
        monitor3.innerHTML = moniterStore1;
    }else{
        moniterStore1 = moniterStore1 + ')'
        monitor3.innerHTML = moniterStore1;
    }
}

function operations(opsSign){
    switch(opsSign) {
        case '%':
            console.log('%');
          break;
        case '+':
            console.log('+');

            if (num1 !== 0 && num1 !== undefined && num1 !== null){
                console.log('if is working')
                if(!sumOn && !subsOn && !diviOn && !multOn){
                    console.log('if in if is working')
                    num1 = num1 + parseInt(moniterStore1);
                    isOperateOn = true;
                    showNum1()
                    sumOn = true;
                }else{
                    console.log('else in if is working')
                    sumOn  = true;
                    subsOn = false;
                    diviOn = false;
                    multOn = false;
                    monitor2.innerHTML = opsSign;
                }
                
            } else{
                console.log('else is working')
                showNum1()
            }
          break;
        case '-':
            console.log('-');

            if (num1 !== 0 && num1 !== undefined && num1 !== null){
                console.log('if is working')
                if(!sumOn && !subsOn && !diviOn && !multOn){
                    console.log('if in if is working')
                    num1 = num1 - parseInt(moniterStore1);
                    isOperateOn = true;
                    showNum1()
                    subsOn = true;
                }else{
                    console.log('else in if is working')
                    sumOn  = false;
                    subsOn =  true;
                    diviOn = false;
                    multOn = false;
                    monitor2.innerHTML = opsSign;
                }
                
            } else{
                console.log('else is working')
                showNum1()
            }
          break;
        case '÷':
          console.log('÷');
          if (num1 !== 0 && num1 !== undefined && num1 !== null){
            console.log('if is working')
            if(!sumOn && !subsOn && !diviOn && !multOn){
                console.log('if in if is working')
                num1 = num1 / parseInt(moniterStore1);
                isOperateOn = true;
                showNum1()
                diviOn = true;
            }else{
                console.log('else in if is working')
                sumOn  = false;
                subsOn = false;
                diviOn =  true;
                multOn = false;
                monitor2.innerHTML = opsSign;
            }
            
        } else{
            console.log('else is working')
            showNum1()
        }
            
        
          break;
        case 'x':
            console.log('x');
            
            if (num1 !== 0 && num1 !== undefined && num1 !== null){
                console.log('if is working')
                if(sumOn && !subsOn && !diviOn && !multOn){
                    console.log('if in if is working')
                    num1 = num1 * parseInt(moniterStore1);
                    isOperateOn = true;
                    showNum1()
                }else{
                    console.log('else in if is working')
                    sumOn  = false;
                    subsOn = false;
                    diviOn = false;
                    multOn =  true;
                    monitor2.innerHTML = opsSign;
                }
                
            } else{
                console.log('else is working')
                sumOn = true;
                showNum1()
            }
          break;
        case '=':
            console.log('=')
          break;
      }
}
function showme(e){
    console.log(e.code);
}

// ------------clearing moniter -----------------//
clearing.addEventListener('click', ()=> {clearMonitor()});

// ------------- click events  ------------------//
// ------------monitering number ----------------//
nien.addEventListener('click', ()=> {justShow('9')});
eight.addEventListener('click', ()=> {justShow('8')});
seven.addEventListener('click', ()=> {justShow('7')});

six.addEventListener('click', ()=> {justShow('6')});
five.addEventListener('click', ()=> {justShow('5')});
four.addEventListener('click', ()=> {justShow('4')});

three.addEventListener('click', ()=> {justShow('3')});
two.addEventListener('click', ()=> {justShow('2')});
one.addEventListener('click', ()=> {justShow('1')});
zero.addEventListener('click', ()=> {justShow('0')});

//---- monitering ')','(','%','+','-','÷','x'----//
openPara.addEventListener('click', ()=> {parenthesing(1)});
closePara.addEventListener('click', ()=> {parenthesing(2)});
modulas.addEventListener('click', ()=> {operations('%')});
sum.addEventListener('click', ()=> {operations('+')});
subs.addEventListener('click', ()=> {operations('-')});
divi.addEventListener('click', ()=> {operations('÷')});
mult.addEventListener('click', ()=> {operations('x')});
equal.addEventListener('click', ()=> {operations('=')});



// ------------monitering Dot"." ----------------//
dot.addEventListener('click', ()=> {if(dotstatus!==true){fractioning()}});

// ------------keydown events ---------------- //
window.addEventListener('keydown', (e)=> {
    if(e.key === '0' ||e.key === '1' ||e.key === '2'
     ||e.key === '3' ||e.key === '4' ||e.key === '5' 
     ||e.key === '6' ||e.key === '7' ||e.key === '8' 
     ||e.key === '9'){
        justShow(e.key)
     }
     else if(e.key === '+' ||e.key === '-' ||e.key === '*'
     ||e.key === '/'){
        monitor2.innerHTML = e.key;
        operations(e.key);
     }else if(e.key === '%' ||e.key === '=')
     {
        operations(e.key);
     }
     else if(e.key === 'Delete'){
        clearMonitor()
     }
     else if(e.key === 'Backspace'){
        // ---- delete the last spell----- //
        moniterStore1 = moniterStore1.slice(0, -1);
        monitor3.innerHTML = moniterStore1;
     }
});


// ------------  operation handling -------------//
// sum.addEventListener('click', ()=> {justShow('0')});
// sum.addEventListener('click', ()=> {justShow('0')});
// sum.addEventListener('click', ()=> {justShow('0')});
// sum.addEventListener('click', ()=> {justShow('0')});
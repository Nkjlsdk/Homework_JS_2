// Задача 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
function test1(){
    
    const num1 = Number(document.getElementById('num1').value); 

    num1 < 1 || num1 === 1 ?
    document.getElementById('result').innerHTML = "num1= " + num1 + " - введено верно" : document.getElementById('result').innerHTML = num1 
    + " - введено неверно";   
}
document.getElementById('enterNum').addEventListener('click', test1);
// document.getElementById('result').innerHTML = inputNumber;

function test2(){
    
    const num2 = Number(document.getElementById('num2').value); 

    num2 > 3 || num2 === 3 ?
    document.getElementById('result2').innerHTML = "num2= " + num2 + " - введено верно" : document.getElementById('result2').innerHTML = num2 
    + " - введено неверно";   
}
document.getElementById('enterNum2').addEventListener('click', test2);

// Задача 2
// Перепишите код к тернарному оператору

let test = true;
test === true ? console.log('+++') : console.log('---');



// Задача 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function decade(){
    const min = 1;
    const max = 31;
    let day = Math.trunc(Math.random().toFixed(1) * (max-min)+min);
    if (Math.trunc(day/10) === 0 || day/10 === 1){
        document.getElementById('randomNumber').innerHTML = "Случайное число от 1 до 31: " +  day + " попадает в первую декаду";
    }
    else 
    if (Math.trunc(day/20) === 0 || day/20 === 1 ) {
        document.getElementById('randomNumber').innerHTML = "Случайное число от 1 до 31: " +  day + " попадает во вторую декаду";
    }
    else {
        document.getElementById('randomNumber').innerHTML = "Случайное число от 1 до 31: " +  day + " попадает в третью декаду"; 
    }      
    // document.getElementById('randomNumber').innerHTML = "Случайное число от 1 до 31: " +  day;

}
window.onload = decade;
document.getElementById('randomNumber');

// Задача 4
// Необязательное задание. Определить высокосный или не высокосный год.
 
 function sort(){
    
    
     let divDiv = Number(document.getElementById('div').value);
     document.getElementById('resultDiv').innerHTML = "В числе:" + divDiv;  
     if (divDiv === 0) {
        document.getElementById('resultDiv1').innerHTML = "Число равно нулю, введите другое число"; 
     } 
     let count = 0;
     let array = [count];
     
             while (divDiv>0) {         
        let remain = divDiv%10;
        divDiv = Math.trunc(divDiv/10);
        console.log(remain);
        array[count] = remain;
        count++; 
        if (count === 5) {
            document.getElementById('resultDiv1').innerHTML = "Количество десятитысячных:" + array[4]+"; "  + "Количество тысячных: " + array[3]+"; "  + "Количество сотен: " + array[2]+"; " + "Количество десятков: " + array[1]+"; " + "Количество единиц: " + array[0];  
        }  else
        if (count === 4) {
            document.getElementById('resultDiv1').innerHTML = "Количество десятитысячных: 0; Количество тысячных: " + array[3]+"; "  + "Количество сотен: " + array[2]+"; " + "Количество десятков: " + array[1]+"; " + "Количество единиц: " + array[0];  
        }  else
        if (count === 3) {
            document.getElementById('resultDiv1').innerHTML = "Количество десятитысячных: 0; Количество тысячных: 0; Количество сотен: " + array[2]+"; " + "Количество десятков: " + array[1]+"; " + "Количество единиц: " + array[0];  
        } else
        if (count === 2 ) {
            document.getElementById('resultDiv1').innerHTML = "Количество десятитысячных: 0; Количество тысячных: 0; Количество сотен 0; Количество десятков: " + array[1]+"; " + "Количество единиц: " + array[0];   
        } else
        if (count === 1) {
            document.getElementById('resultDiv1').innerHTML = "Количество десятитысячных: 0; Количество тысячных: 0; Количество сотен 0; Количество десятков: 0; Количество единиц: " + array[0];  
        }       
   } 
   console.log(count); 
// for (let index = count; index = 0; index--){
// let element = array[index];
// }

}
document.getElementById('sortUnit').addEventListener('click', sort);   

// Задача 5



function yearLeap(){    
    let yearCount = Number(document.getElementById('year').value);
    document.getElementById('resultYear').innerHTML = yearCount + "год:";

    if (yearCount%100 === 0) {
      if ((yearCount/400 - Math.trunc(yearCount/400)) === 0) {
        document.getElementById('result366').innerHTML = "Високосный год";
      }  else {
        document.getElementById('result365').innerHTML = "Невисокосный год";
      }
    } else {
         if ((yearCount/4 - Math.trunc(yearCount/4)) === 0) {
                document.getElementById('result366').innerHTML = "Високосный год";            
            }  else {
                document.getElementById('result365').innerHTML = "Невисокосный год";
            }
        }
    }

    


document.getElementById('okok').addEventListener('click', yearLeap); 




// if ((yearCount%100 === 0) && ((yearCount/400 - Math.trunc(yearCount/400)) === 0)){
        
//     document.getElementById('result366').innerHTML = "Високосный год";
// } else 
// if ((yearCount%100 === 0) && ((yearCount/400 - Math.trunc(yearCount/400)) != 0))
// {
//     document.getElementById('result365').innerHTML = "Невисокосный год";
// }
    

   
// if ((yearCount%100 != 0) && ((yearCount/4 - Math.trunc(yearCount/4)) === 0)) {
//     document.getElementById('result366').innerHTML = "Високосный год";
// } else 
// if ((yearCount%100 != 0) && ((yearCount/4 - Math.trunc(yearCount/4)) != 0))
// {
//     document.getElementById('result365').innerHTML = "Невисокосный год";
// }
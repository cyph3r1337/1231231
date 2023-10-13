let число = 123456;


let числоСтрока = число.toString();


let сумма = 0;


for (let i = 0; i < числоСтрока.length; i++) {
  
  сумма += parseInt(числоСтрока.charAt(i));
}


console.log("Сумма цифр:", сумма);
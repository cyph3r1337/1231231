let число = 123456;


let числоСтрока = число.toString();


let перваяЦифра = parseInt(числоСтрока.charAt(0));


let последняяЦифра = parseInt(числоСтрока.charAt(числоСтрока.length - 1));


let сумма = перваяЦифра + последняяЦифра;


console.log("Сумма первой и последней цифры:", сумма);
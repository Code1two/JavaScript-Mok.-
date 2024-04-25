// Parašykite JavaScript programą, kuri patikrina, ar duotas skaičius egzistuoja diapazone
//  nuo 40 iki 10000. Pavyzdžiui, 40 egzistuoja tarp 40 ir 4000.

let addNum = (prompt('Iveskite skaiciu:'));

function checkNum(addNum){
    return addNum >= 40 && addNum <=10000;
}
if (checkNum(addNum)){
    console.log(`${addNum} egzistuoja tarp 40 ir 10000`);
}else {
    console.log(`${addNum} skaicius nera tarp 40 ir 10000`);
}


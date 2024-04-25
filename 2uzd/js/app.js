/**"Parašykite JavaScript programą, kuri įvertina studento bendrus taškus įvairiuose egzaminuose ir nustato jo pažymį. Vertinimo kriterijai yra šie:
 
Jei bendri taškai yra tarp 89 ir 100 (įskaitant), studentas gauna A+ pažymį.
Jei egzaminas pažymimas kaip 'Baigiamasis egzaminas', studentas gaus A+ pažymį tik jei jo bendri taškai yra 90 ar daugiau. 
Tarkime, kad baigiamasis egzaminas yra pažymimas 'true' kaip antrasis parametras, kitu atveju - tuščias.
Jei studentas pasiekia A+ pažymį, programa turėtų grąžinti 'true', kitu atveju - 'false'." */

function isItA(bendriTaskai, baigiamasisEgzaminas = false) {
  if (baigiamasisEgzaminas && bendriTaskai >= 89 && bendriTaskai <= 100) {
    return true;
  } else if (!baigiamasisEgzaminas && bendriTaskai >= 90) {
    return true;
  } else {
    return false;
  }
}

console.log(isItA(95, true));
console.log(isItA(88));
console.log(isItA(90));
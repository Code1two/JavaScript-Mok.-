// Parašykite JavaScript programą, kuri sukurtų naują eilutę iš duotos eilutės.
// Ši programa pašalina pirmąjį ir paskutinį eilutės simbolius, jei pirmasis arba paskutinis simbolis yra 'P'. 
// Grąžinkite originalią eilutę, jei sąlyga nėra patenkinta.

let line = 'Paziurekime ar kazkas yra eiluteje';

function modifyLine(line){
    let lineArray = line.split('');
    if (lineArray[0] === 'P'){
        lineArray.shift();
    }
    if (lineArray[lineArray.length -1] === 'P'){
        lineArray.pop();
    }
    let modifiedLine = lineArray.join('');
    return modifiedLine !== '' ? modifiedLine : line;
}
let modified = modifyLine(line);
console.log(modified);


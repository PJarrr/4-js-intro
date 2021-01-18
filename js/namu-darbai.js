//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
const num1 = 1;
const num2 = 55;
const num3 = 100;

console.log(num1);
console.log(num2);
console.log(num3);
//Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

let vardas = 'paulius';
let gyvunas = 'lokys';
let medis = 'liepa';

console.log(vardas);
console.log(gyvunas);
console.log(medis);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [25, 257, 346, 465, 524];
let arr3 = [2020, 2000, 1995, 1983, 1957];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

let medziai = ['liepa', 'berzas', 'azuolas', 'bukas', 'egle'];
let miestai = ['vilnius', 'klaipeda', 'kulautuva', 'kursienai', 'siauliai'];
let vardai = ['zose', 'stase', 'jadze', 'albina', 'audrele'];

console.log(medziai);
console.log(miestai);
console.log(vardai);

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

let suma = num1 + num2 + num3;
console.log(suma);

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

let zodziuKratinys = vardas + ' ' + gyvunas + ' ' + medis;
console.log(zodziuKratinys);

console.log(`kitas kratinys ${vardas} ${gyvunas} ${medis}`)

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console

let verte1 = arr1[0] - arr1[1] + arr1[2] - arr1[3] + arr1[4];
let verte2 = arr2[0] - arr2[1] + arr2[2] - arr2[3] + arr2[4];
let verte3 = arr3[0] - arr3[1] + arr3[2] - arr3[3] + arr3[4];


// 
console.log(verte1);
console.log(verte2);
console.log(verte3);





// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

let sujungtiMedziai = medziai[4] + ', ' + medziai[3] + ', ' + medziai[2] + ', ' + medziai[1] + ', ' + medziai[0];
console.log(sujungtiMedziai);

let sujungtiMiestai = miestai[4] + ', ' + miestai[3] + ', ' + miestai[2] + ', ' + miestai[1] + ', ' + miestai[0];

console.log(sujungtiMiestai);

let sujungtiVardai = vardai[4] + ', ' + vardai[3] + ', ' + vardai[2] + ', ' + vardai[1] + ', ' + vardai[0];

console.log(sujungtiVardai);

//-------------------------------------------------

//išvesti į konsolę visų sąrašų ilgius

console.log(arr1.length);
console.log(arr2.length);
console.log(arr2.length);

console.log(miestai.length);
console.log(vardai.length);
console.log(medziai.length);

//išvesti į konsolę kiekvieno tekstinio tipo sąrašo elemento reikšmę ir jos ilgį.

console.log(miestai[0] +" zenklu skaicius yra " + miestai[0].length);

//loop per sąrašus išvedant į konsolę kiekvieno itemo ženklų skaičiu:
miestai.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value +" zenklu skaicius yra " + value.length);
}

vardai.forEach(myFunction);

function myFunction2(value, index, array) {
  console.log(value +" zenklu skaicius yra " + value.length);
}
medziai.forEach(myFunction);

function myFunction3(value, index, array) {
  console.log(value +" zenklu skaicius yra " + value.length);
}






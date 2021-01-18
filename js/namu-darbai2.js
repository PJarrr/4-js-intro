// Kintamųjų palyginimas
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

const a = 'alfa';
const b = 'beta';
const c = a;

if (a !== b) {
    console.log('bandykite kitą kartą');
} else {
    console.log('Pomidoras');
}

if (a === c){
    console.log('Pomidoras')
} else {
    console.log('bandykite kita karta')
}


console.log('------------------------------')


// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus
const num1 = 5;
const num2 = 5;

if (num1 > num2) {
    console.log(`su if: ${num1} yra daugiau uz ${num2}`);
    
} else if (num1 === num2) {
    console.log(`su if:${num1} yra lygus ${num2}`);
}
else {
    console.log(`su if:${num2} yra daugiau uz ${num1}`);
}


//su switchu
switch (true){
 
    case (num1 === num2):
    console.log(`switch:${num1} yra lygus ${num2}`);
    break; //jei vienodi tada sustoja. 
    
    case (num1 !== num2):
    console.log(`switch: ${num1} nera lygus ${num2}`)
    
    case (num1 > num2):
    console.log(`switch:${num1} yra daugiau uz ${num2}`);
    break;
    
    case (num1 < num2):
    console.log(`switch:${num2} yra daugiau uz ${num1}`);
    break;
}







console.log('------------------------------')
// Išvesti teksto tipo kintamųjų ilgius
// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

const text1 = "Analfabetas"
const text2 = "Disleksikass"

if (text1.length > text2.length) {
    console.log(`Tekstai nevienodo ilgio. Pirmasis tekstas yra ilgesnis`);
    
} else if (text1.length === text2.length) {
    console.log(`Tekstų ilgiai vienodi`);
} else {
    console.log(`Tekstai nevienodo ilgio. Pirmasis tekstas trumpesnis`);
}



let array1 = ['suo', 'katins', 'triusis', 'bulve'];
let array2 = ['simpanze', 'liutas', 'buratinas', 1, 2]


console.log(array1.length);
console.log(array2.length);

let length1 = array1.length;
let length2 = array2.length;

const palyginimas = (length1 !== length2)? 
                                        (length1 > length2) ?  "sarasas1 ilgesnis" : 'sarasas2 ilgesnis' 
                                        : 'sarasai vienodo ilgio'

console.log(`su ternary: ${palyginimas}`)




// Išvesti sąrašo tipo kintamųjų ilgius
// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

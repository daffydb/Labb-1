
console.log("script.js är kopplad.");

console.log("Före blocket;", a);

// console.log("Före blocket;", b);
// Det ger ReferenceError eftersom b bara finns inuti blocket
// console.log("Före blocket;", c);
// Det ger ReferenceError eftersom c bara finns inuti blocket
{
    var a = 1;
    let b = 2;
    const c = 3;

    console.log("Inuti blocket;", a, b, c);
}

console.log("Efter blocket;", a);
// console.log("Efter blocket;", b);
// console.log("Efter blocket;", c); 

/* 
Reflektion Uppgift 2
var, let och const används för att skapa variabler
Det som är skillnaden är att var fungerar även utanför blocket
men let och const funkar bara inuti blocket.
När jag testar console.log före blocket får jag undefined för var
eftersom variabeln inte fått något värde ännu.
Och inuti blocket fungerar alla tre variabler. Efter blocket fungerar
bara var.
let och const ger fel eftersom de inte går att använda utanför blocket
där de skapades. De ger ReferenceError när jag försöker använda de
för eller efter blocket.  
*/

const add = (num1, num2) => {

    //console.log(num1 == 0,);
    //console.log(num2 === '0');
    //console.log(num2 === 0);
    //console.log(num1 == NaN);
    //console.log(num1 ? "truthy" : "falsy");

    if (
        num1 !== null &&
        num1 !== undefined &&
        num2 !== null &&
        num2 !== undefined &&
        typeof num1 === "number" &&
        typeof num2 === "number" 
    ) {
        return num1 + num2
    } else {
        console.log("Felaktig input");
    }
}; 

/* Reflektion uppgift 3

Med let hade jag kunnat ändra värdet på add
men med const kan jag inte tilldela den ett nytt värde.
Funktionen kan också skrivas så här med en funktionsdeklaration:

function add(num1, num2) {
    return num1 + num2;
}

Return betyder att funktionen skickar tillbaka ett
resultat och sedan avslutas. Och i min funktion add
skickas summan av de två talen tillbaka. Jag kan
sen spara resultatet i en variabel eller skriva
ut det med console.log().
*/

/* Reflektion uppgift 4
En ternary operator skrivs på en rad: villkor ? om sant : om falskt.
Den ger ett värde. Och en if sats fungerar typ likadant
men har fler rader. 
Och om jag använder == så jämförs bara värdet medans ===
jämför både värdet och datatypen.
När jag använder if-satsen kontrollerar jag att num1
och num2 inte är null eller undefined med !==. Jag kollar också
att båda är nummer. Alla villkor måste
stämma för att funktionen ska addera talen.
 */

const num1 = 0;
let arg1;
let sum = false;

console.log(add(sum, 1));
console.log(add("0", 3));
console.log(add(3, "num1"));
console.log(add(-5, num1));
console.log(add(arg1, 7));
console.log(add());

console.log("num1:", num1);
console.log("sum:", sum);

/* Reflektion uppgift 5

En parameter är namnet i funktionen och ett argument är
det jag skickar in när jag anropar funktionen. En variabel
är något där jag sparar ett värde.

Num1 är fortfarande 0 eftersom värdet i funktionen inte
ändrar variabeln utanför funktionen. Sum är fortfarande false
eftersom jag inte sparade något returvärde i den.

Test 1: sum är false boolean, inte ett tal.
Test 2: "0" är en sträng pga citattecknen
Test 3: "num1" är bara text inte variabeln.
Test 4: -5 och 0 är tal så svaret blir -5.
Test 5: arg1 har inget värde (undefined).
Test 6: inga argument så båda är undefined.

Och efter felaktig input blir resultatet undefined eftersom
else inte returnerar något värde.
*/
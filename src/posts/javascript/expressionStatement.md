---
title:  Was sind eigentlich Expressions und Statements?
date: 2020-03-08
collections: javascript
layout: post.hbs
excerpt: Manchmal nicht ganz trivial, unterscheidet Javascript zwischen Expressions und Statements. Ein Primer zu den Ausdrücken. 
---

Expressions (Ausdrücke) und Statements (Anweisungen) sind zwei wichtige Begriffe in JavaScript. Angesichts der Häufigkeit, mit der diese beiden Begriffe zur Beschreibung von JavaScript Code verwendet werden, ist es wichtig, ihre Bedeutung und den Unterschied zwischen den beiden zu verstehen.

## 1. Expression

Jede Code, der zu einem Wert ausgewertet werden kann, ist eine Expression. Da Expressions Werte erzeugen, können sie überall in einem Programm erscheinen, wo JavaScript einen Wert erwartet, wie zum Beispiel die Argumente eines Funktionsaufrufs. Die Expressions können noch in folgende Deklarationen untertteilt werden.

### Arithmetic Expressions

Arithmetische Expressions geben einen numerischen Wert zurück.

```js
20 / 2 // -> evaluates to 10
10 + 30 // -> evaluates to 40
i++ // -> increase by 1
```

### String Expressions

String Expression geben einen String zurück.

```js
`Hallo` // -> evaluates to Hallo
`Hallo` + ` World` // -> evaluates to Hello World
```

### Primary Expressions

Expressions die als Variablenreferenz ausgewertet werden, Literalwerte und einige Schlüsselwörter. Sie dienen als Grundlage für die Erstellung anderer Ausdrücke.

```js
36 // -> integer 36
this // -> the current value
undefined // -> undefined
true // -> evaluates to true

// also keywords can be expressions
function
class
```

### Boolean Expressions

Expressions, die den booleschen Wert wahr oder falsch ergeben, werden als Boolean Expressions betrachtet. Bei boolen Expressions werden häufig logische Operatoren wie &&, || und ! verwendet. True und false sind aber auch primary expressions. Siehe weiter oben.

```js
1 > 2 // -> evaluates to false
35 < 48 // -> evaluates to true
```

### Assignement Expressions

Wenn Expressions den = Operator verwenden, um einer Variablen einen Wert zuzuweisen, wird dies als Assignment Expressions (Zuweisungsausdruck) bezeichnet. 

```js
age = 34; // -> evaluates to 34
greet = `Hallo Bob!`; // -> evaluates to Hallo Bob!

let a = (b = 1); 
// -> evaluates to 1
// -> 1 is assigned to b and a is assigned to the evaluated expression b = 1
// -> let is not part of the assignement expression
```

### Left-hand-side Expressions

Left-hand-side Expressions sind diejenigen Expressions welche auf der linken Seite eines Zuweisungsausdrucks erscheinen können. Sie geben eine Referenz zurück.

```js
new // -> evaluates to a instance of a constructor
super // -> calls the parent constructor
(new object).x = 1; // -> evaluates to 1
names[4] = `John`; // -> evaluates to John
```

## 2. Statements

Ein Statement ist eine Anweisung, eine bestimmte Aktion auszuführen. Solche Aktionen umfassen das Erstellen einer Variablen oder einer Funktion, das Durchlaufen eines Arrays von Elementen, das Auswerten von Code basierend auf einer bestimmten Bedingung usw. JavaScript-Programme sind eigentlich eine Folge von Anweisungen. Auch Statements können unterteilt werden.

### Declaration Statements

Zu diesen Statements gehören die Definition von Variables und Functions. Diese sind var, const, let und function. Diese Statements können an anderen Stellen im Programm verwendet werden. Man weist diesen auch Werte zu.  

```js
let square; // -> let declares square
const name; // -> const declares name

var age = 34;
// -> var age is a declaration statement and 
// -> age = 34 is an assignement expression

function greet(name) {
  console.log(`Hallo ${name}`);
}
// -> a function declaration statement 
```

### Expression Statements

Überall dort wo JS ein Statement erwartet, kann diese auch als Expression geschrieben werden. Nicht aber umgekehrt. Eine Expression kann nicht als Statement geschrieben werden. Meistens erkennbar, wenn eine Expression mit Semikolon abgeschlossen wird. Schwierig zu unterscheiden...!

```js
console.log(`Hallo Bob`);
// -> console.log is a statement
console.log( const a ); 
// -> err, const a is a declared statement, but an expression was expected
```

### Conditional Statements

Eine bedingte Anweisung ist ein beliebiger Code, der verwendet wird, um die Voraussetzungen anzugeben, die erforderlich sind, damit der Computer bestimmte Aktionen ausführen kann. Die vier Arten von bedingten Anweisungen in JavaScript sind if, else, else if und switch. Sie bestimmen den Kontrollfluss im Programmm.

```js
if ( 12 < 56 ) {
  console.log(`12 is smaler than 56`);
  } else {
    console.log(`12 is bigger than 56`);
}
// -> 12 ist smaler than 56
```

### Loops and Jumps

Looping Statements umfassen folgende Anweisungen: while, do/while, for und for/in. Jump Statements werden verwendet, um den JavaScript-Interpreter an eine bestimmte Stelle innerhalb des Programms springen zu lassen. Beispiele für Jump Statements sind unter anderem Break, Continue, Return und Throw.

```js
let timer = 1;

while (timer < 5) {
  console.log(timer);
  ++timer;
}
// -> 1, 2, 3, 4, 5
```

Wichtig! Die Unterscheidung ist insofern von Bedeutung um Fehler zu verstehen, Code zu lesen und wissen was gerade im Code geschiet. Ist es eine Anweisung oder ein Ausdruck? Einfach zu merken ist auch, dass Expressions die kleinere Einheit im Code ist als ein Statement. Expressions sind in Statements integriert. 
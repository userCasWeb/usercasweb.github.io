---
title:  3 Wege eine Function zu definieren
date: 2020-03-07
collections: javascript
layout: post.hbs
excerpt: Welche Möglichkeiten werden unterschieden um Functions zu definieren? Mit Beispielen.
---

Um eine Function zu definieren gibt es in Javascript 3 grundsätzliche verschiedene Möglichkeiten. Je nach Situation und Preferenz eignet sich die eine Art besser oder schlechter. Dann wird noch kurz das Return Statement angeschaut und am Schluss noch kurz die Arguments.

## 1. Function Definition
### Function Declaration

Die erste Möglichkeit besteht darin, mit dem Keyword **function** die Function zu deklarieren. So als würde man eine Variable mit dem Keyword **var** deklarieren. Dabei geben wir der Function einen Namen. Im Beispiel unten ist es "square". 

```js
function square(x) {
  return x * x;
}
```

### Function Expression 

Als zweitens kann die Function als **Expression** definieren werden. Dabei wird einer Variablen gleich die Function angehängt oder bestimmt. Wir geben aber der Function keinen Namen. Sonder speichern diese in einer Variablen, in diesem Fall auch "square".

```js
const square = function(x) {
  return x * x;
}
```

### Arrow Function Expression

Neu kann eine Function auch mit einem **=>** (gleich grösser Zeichen) definiert werden. Dieses Zeichen nennt man auch **Fat Arrow**. Manchmal wird diese Function auch Fat Arrow Function genannt. Es ist das gleiche Prinzip wie bei der Function Expression nur, dass das Keyword "function" weggelassen werden kann und die Paratemer vor der Fat Arrow geschrieben wird. 

```js
const square = (x) => {
  return x * x;
}
```

## 2. The return statement

Bei allen 3 Definitionen ist ein **return statement** im **function body**. Dieses statement ist notwendig um das Resultat der function zurückzugeben. Dieses statement kann aber auch bei einer **Arrow Function** weggelassen werden. Dazu mehr in einem anderen Beitrag. Wenn wir das return statement wegglassen und dafür eine Konstante definieren, wird beim Aufruf der Function undefined zurückgegeben.

```js
function square(x) {
  const a = x * x;
}
square(9); // -> undefined
```

Mit dem Aufruf des Function Name **square** wird die Function selber zurückgegeben. Man gibt keine Argumente mit. 

```js
// Function Declaration
function square(x) {
  return x * x;
}
square; // -> f square(x) {return x * x;}

// Function Expression 
const square = function(x) {
  return x * x;
}
square; // -> f (x) {return x * x;}

// Arrow Function Expression
const square = (x) => {
  return x * x;
}
square; // -> f (x) {return x * x;}
```

## 3. Too many or too few arguments

Wenn wir aber nicht alle **arguments** beim Aufruf der **function** mitgeben, wird ein NaN zurückgegeben. Je Nachdem wird auch ein undefinet zurückgegeben. Wenn ein Argument zuviel mitgegeben wird, wird dieser ignoriert.

```js
function surface(x, y) {
  return x * y;
}
surface(); // -> Nan
surface(4); // -> NaN
surface(4,5); // -> 20
surface(4,5,10); // -> 20
```

Hier noch ein Beispiel mit Strings. Hier wird bei einem fehlenden Argument undefined zurückgegeben, aber der erste Wert wird zurückgegeben.

```js
function concate(x. y) {
  return x + y;
}
concate(); // -> NaN
concate("Hallo "); // -> Hallo undefined
concate("Hallo ", "World "); // -> Hello World
concate("Hallo ", "World ", "we love you"); // -> Hello World
```
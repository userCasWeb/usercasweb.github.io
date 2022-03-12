---
title:  3 Wege eine Function zu definieren
date: 2020-03-07
collections: javascript
layout: post.hbs
excerpt: Welche Möglichkeiten werden unterschieden um Functions zu definieren? Mit Beispielen.
---

Um eine Function zu definieren gibt es in Javascript 3 grundsätzliche verschiedene Möglichkeiten. Je nach Situation und Preferenz eignet sich die eine Art besser oder schlechter. 

### Function Declaration

Die erste Möglichkeit besteht darin, mit dem Keyword "function" die Function zu deklarieren. So als würde man eine Variable mit dem Keyword "var" deklarieren. Dabei geben wir der Function einen Namen. Im Beispiel unten ist es "square". 

```js
function square(x) {
  return x * x;
}
```

### Function Expression 

Als zweitens kann die Function als Expression definieren werden. Dabei wird einer Variablen gleich die Function angehängt oder bestimmt. Wir geben aber der Function keinen Namen. Sonder speichern diese in einer Variablen, in diesem Fall auch "square".

```js
const square = function(x) {
  return x * x;
}
```

### Arrow Function Expression

Neu kann eine Function auch mit einem "=>" (gleich grösser Zeichen) definiert werden. Dieses Zeichen nennt man auch Fat Arrow. Manchmal wird diese Function auch Fat Arrow Function genannt. Es ist das gleiche Prinzip wie bei der Function Expression nur, dass das Keyword "function" weggelassen werden kann und die Paratemer vor der Fat Arrow geschrieben wird. 

```js
const square = (x) => (
  return x * x;
)
```
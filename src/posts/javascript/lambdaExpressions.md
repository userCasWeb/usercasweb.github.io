---
title:  Lambda (𝜆) Expressions
date: 2020-03-14
collections: javascript
layout: post.hbs
excerpt: Lambda Expressions gibt es in den meisten modernen Programmiersprachen. Sie sind einfach Ausdrücke, die Funktionen erzeugen. Hier werden ein paar aufgezählt.
---

Lambda Expressions sind sehr wichtig für eine Programmiersprache, die Funktionen erster Klasse unterstützt, was im Grunde bedeutet, dass Funktionen als Argumente an andere Funktionen übergeben oder Variablen zugewiesen werden können. 

In JavaScript kann alles wie ein Objekt behandelt werden, d. h. eine Funktion kann als Parameter an eine andere Funktion gesendet und auch als Rückgabewert von der aufgerufenen Funktion zurückgegeben werden.

Wir fangen mit den einfachen Ausdrücken an und erarbeiten aufbauend so weitere Lambda Expressions.

## Identity

Diese Funktion gibt ihre eigene Identität aus. Der Lambda Ausdruck ist `𝜆a.a`.

```js
const I = x => x; 

// Example
I(5) === 5; // -> true
```

## Mockingbird

Gibt die eigene Funktion wieder. Der Lambda Ausdruck ist `𝜆f.ff := 𝜆f.𝜆f.f`. Achtung `M(M)` ergibt stack overflow.

```js
const M = f => f(f);

// Example
M(I) === I; // -> true
```

## Kestrel

Eine Funktion welche den ersten Parameter zurückgibt. Der Lambda Ausdruck ist `𝜆ab.a`. Wird auch verwendet um boolen True zurückzugeben. 

```js
const K = x => y => x; // -> Kestrel
const T = K; // -> True

// Example
K(6)(98) === 6; // -> true
```

## Kite

Diese Funktion gibt den zweiten Paramter zurück. Der Lambda Ausdruck ist `𝜆ab.b`. Wird im Gegensatz zu Kestrel verwendet für boolen False. 


```js
const KI = x => y => y; // -> Kite
const F = KI; // -> False

// Example
K(6)(98) === 98; // -> true
```

## Cardinal

Kehrt die 2 Parameter `x` und `y` um und wendet die Funktion `f` auf sie an. Der Lambda Ausdruck ist `𝜆fab.fba`.

```js
const C = f => x => y => f(y)(x);

// Example
C(K)(2)(6) === 6; // -> true
// -> C := Cardinal flips arg -> C(K)(6)(2)
// -> K := Kestrel returns first arg -> (6)
```

## Vireo / Pair

Pair nimmt zwei beliebige Werte, `a` und `b`, und gibt eine Funktion ("das Paar") zurück, die über diese Werte schließt. Wenn das Paar mit einem Endargument `f` gefüttert wird, wird `f` auf `a` und `b` angewandt. Unser Paar kann also `a` und `b` in dieser Reihenfolge an jede binäre Funktion liefern. Der Lambda Ausdruck ist `λxyf.fxy`.

Dieser Kombinator ist sehr interessant, da wir ihn in Kombination mit den Kombinatoren Kestrel und Kite verwenden können, um eine 2-Tupel- oder Paar-Datenstruktur zu erstellen.

```js
const pair = x => y => f => f(x)(y);

// Example
pair(6)(19); // -> f => f(x)(y)
pair(6)(19)(K) === 6; // -> true K := Kestrel returns first param
pair(6)(19)(KI) === 19; // -> true KI := Kite returns second param
```

## First Value of a Pair

In zusammenhang mit Vireo / Pair gibt dieser Ausdruck den ersten Wert von zweien zurück. Der Lambda Ausdruck ist `𝜆p.pK`. Wobei `p` für die obere Funktion `pair` steht. Es ist eigentlich wie schon in `pair` beschrieben einfach mit der Anwendung der Funktion. Sie ist auch ein bisschen anderst geschrieben. Das Resultat ist das gleiche.

```js
const fst = p => p(K);

// Example
const name = pair("first")("second");
fst(name) === "first"; // -> true

fst(pair("first")("second")) === "first" // -> true
```

## Second Value of a Pair

Dies ist das gleich wie First Value of a Pair ausser das der zweite Wert von zweien zurück gegeben wird. Der Lambda Ausdruck ist `𝜆p.pKI`.

```js
const snd = p => p(KI);

// Example
const name = pair("first")("second");
snd(name) === "second"; // -> true

snd(pair("first")("second")) === "second" // -> true
```

## Pair Encoding

Hier wird ein Beispiel aufgezeigt, wie man mit `pair` arbeiten kann. Sei gesagt, dass die Daten immutable (unveränderbar) sind. `person` nimmt 3 Parameter auf, `firstname`, `lastname`und `age`. Diese 3 Paramter werden der Funktion `pair` übergeben, mit nochmals verschachteltem `pair`. Erstes `pair`ist `pair()()`, zweites `pair` ist im ersten Klammerausdruck, dort auch wieder mit `pair()()`. Das ergibt das Konstrukt `pair(pair()())()`.

```js
const person = 
  firstname => 
  lastname => 
  age => 
  pair(pair(firstname)(lastname))(age);

const firstn = p => fst(fst(p)); 
const lastn = p => snd(fst(p)); 
const age = p => snd(p);

firstn(person("John")("Smith")(54)); // -> John
lastn(person("John")("Smith")(54)); // -> Smith
age(person("John")("Smith")(54)); // -> 54
```

Wir können auch mit einer `const` arbeiten.

```js
const admin = person("John")("Smith")(54);

firstn(admin); // -> John
lastn(admin); // -> Smith
age(admin); // -> 54
```
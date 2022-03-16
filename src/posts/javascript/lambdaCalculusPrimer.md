---
title:  Einführung in den 𝜆 Lambda Calculus 
date: 2020-03-10
collections: javascript
layout: post.hbs
excerpt: Was ist der Lambda Calculus und wie muss man in lesen? Wieso ist es wichtig den Calculus zu verstehen?
---

Der 𝜆 Calculus kann als die kleinste universelle Programmiersprache der Welt bezeichnet werden. Er wurde in den 1930 Jahren von Alonzo Church eingeführt, um das Konzept der effektiven Berechenbarkeit zu formalisieren. Jede berechenbare Funktion kann mit diesem Formalismus ausgedrückt und ausgewertet werden. 

Der 𝜆 Calculus besteht aus einem einzigen Schema der Funktionsdefinition und einer einzigen Transformationsregel, nämlich die der Variablensubstitution. Hier sei mal ein Beispiel eines 𝜆 Calculus aufgeführt.

```js
𝜆a.a
```

Das Zentrale Konzept im 𝜆 Calculus is der Ausdruck. Der Ausdruck kann eine Variable eine Funktion oder eine Anwendung sein. Eine Funktion wiederum wird mit dem 𝜆 Zeichen einer Variable und einem Ausdruck gebildet. Die Anwendung ist zusammengesetzt aus Ausdrücken. Man kann auch noch Ausdrücke gruppieren

```js
Ausdruck  := Variable | Funktion | Anwendung
Funktion  := 𝜆 Variable . Ausdruck
Anwendung := Ausdruck Ausdruck
Gruppe    := (Ausdrücke)
```

## 1. Schema Funktionsdefinition

Eine Funktin wird definiert durch das Zeichen 𝜆 mit einer Variablen, danach ein Punkt, gefolgt von einem Ausdruck. Wenn wir nun das Beispiel der Identitätsfunktion nehmen, `𝜆a.a`, dann lesen wir heraus, dass dies eine Funktion ist, da sie mit `𝜆` anfängt. Diese Funktion hat eine Variable. Danach folgt der Ausdruck der sagt, was mit dieser Variable angefangen werden soll. In diesem Fall wird einfach das zurückgegeben was als Variable eingegeben wird. Jede Funktion kann nur eine Variable haben, nicht mehrere. `𝜆ab.a` ist zwar eine gültige Schreibweise, heisst aber nicht, dass es 2 Variablen `a` und `b` hat sondern ist eine gekürzte Schreibweise für `𝜆a.𝜆b.a` was wiederum mit Klammern geschrieben werden kann `𝜆a.(𝜆b.a)`. Das heisst dass die Funktion 𝜆a den Ausdruck `𝜆b.a` ausführen soll. Dieser Ausdruck besteht wiederum aus einer Funktion welche die Variable `b` hat und den Ausdruck `a` entgegenimmt. 

Die Übersetzung in Javascript sieht so aus, dass wir dazu die Fat Arrow Function dazu nehmen. Unten sei gleich mal wieder die Identitätsfunktion wieder gegeben, als 𝜆 Calculus und als Javascript Funktion. Das 𝜆 Zeichen ist in JS die Fat Arrow. Das erste a in 𝜆 Calculus ist in JS das erste x, also der Parameter. Der Punkt im 𝜆 Calculus leitet in JS den Function Body ein. Und das letzte a ist dann das Statement oder Expression in JS.

```js
// -> Lambda Calculus
I := 𝜆a.a

// -> Javascript Fat Arrow Function
I = x => x;

// -> Other Lambda Example
K := 𝜆a.𝜆b.a
K := 𝜆ab.a

// -> in JS
K = x => y => x;
```

## 2. Variablensubstitution

Mit diesen Regeln möchte man den 𝜆 Calculus vereinfachen. Es sind sozusagen Auswertungstrategien um 𝜆 Ausdrücke zu vereinfachen. Die 3 bekanntesten sollen hier vorgestellt werden. 

### α-Reduktion 

Bei diesem Vorgehen werden die Parameter umbenannt. Weil beide Ausdrücke das gleiche bedeuten, können diese auch ersetzt werden. 

```js
const id = x => x;
const id = y => y;
```

Dieses Vorgehen muss genauer noch angeschaut werden, weil nur wirklich gleiche Ausdrücke mit anderen Variablen ersetzt werden dürfen. 

### 𝛽-Reduktion

Diese Reduktion zielt darauf ab, die Funktion anzuwenden und so den Ausdruck zu vereinfachen. Man nimmt das erste Argument und setzt ihn in der Funktion auf der linken Seite ein. `(I)` ist das erste Argument und wird für den ersten Parameter `f` eingesetzt. Dadurch entfällt das erste `f` auf der linken Seite und wird im Function Body ersetzt durch `(I)`. Das gleiche wird weiter forgeführt mit dem Argument `(1)`. Erster Parameter `(x)` wird gestrichen und im Function Body ersetzt durch `(1)`. Da `(I)` die Idenditäts-Funktion ist, schreibt man diese aus, also `x => x`. Danach wird der Paramter `(x)` wieder gestrichen und ersetzt mit einer `(1)`.

```js
( f =>  x =>  f   (x) ) (I)  (1);
(       x =>  (I) (x) )      (1);
(             (I) (1) );
        ( x => x) (1);
              (1);
```

Merke, dass die 𝛽-Reduktion auf ein Function Call angewendet wird. Die 2 Argumente `(I)` und `(1)` sind im Curry Style geschrieben `// -> (I)(1)` und nicht `(I, 1)`.

### 𝜂-Reduktion

Bei der 𝜂-Reduktion werden die redundanten Parameter in einer Funktion gestrichen. Das Beispiel liest sich so, nimm den letzten Parameter in dem Function Body und streiche ihn auf der linken und rechten Seite. Das wäre dann mal das `(y)`. Führe das Vorgehen mit dem jetzigem letztem Parameter wieder gleich aus. Also `(x)`. 

```js
x => y => plus (x) (y);
x =>      plus (x);
          plus;
```

Zum Merken gilt, dass die 𝜂-Reduktion auf Funktionen angewendet wird. 


### Beispiel einer Kombination der Strategien

Wenn wir nun das Beispiel aus der 𝛽-Reduktion nehmen, können wir die Function auch reduzieren mit der 𝜂-Reduktion und der 𝛽-Reduktion. 

```js
( f =>  x =>  f   (x) ) (I) (1); 
( f =>        f       ) (I) (1); // -> 𝜂-Reduktion
                    (I) (I) (1); // -> α-Reduktion I := f => f
                            (1); // -> 𝜂-Reduktion
```
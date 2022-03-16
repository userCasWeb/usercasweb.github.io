---
title:  Der Aufbau einer Function erklärt und visualisiert.
date: 2020-03-06
collections: javascript
layout: post.hbs
excerpt: Hier wird beschrieben, wie eine Function Declaration aufgebaut ist. Kann auch Stückweise auf andere Functionsdefinitionen angewandt werden.
---

Als Neuling in der Programmierung wird man von Anfang an mit unglauhblichen Ausdrücken beworfen. Man versteht am Anfang gar nichts. In diesem Post nehme ich die Function mal auseinander und versuche Begrifflichkeiten die wir immer wieder antreffen werden zu beschreiben und in einen Kontext zu setzten. Dazu habe ich mal ein Beispiel erstellt, welches das Trinkgeld berechnen soll.

```js
function calcTip(meal, tip) {
  const total = meal * (100 + tip) / 100;
  return total; 
}
const myTip = calcTip(75, 10); // -> 82.5
```

Das Wort `function` ist das **keyword**. Danach folgt `calcTip` welches den **function name** definiert. In Klammern geschrieben `(meal, tip)` sind die **parameters**, wenn es mehrere sind wie im Beispiel mit einem Komma getrennt. Danach folgt die öffnende geschweifte Klammer `{`, welche den **scope startet** oder öffnet. Die folgenden 2 Zeilen sind sogenante **statements**. Wobei das letzte statement die **return statement** ist. `return` ist auch ein **keyword**. Am Schluss der Function Declaration ist die schliessende geschweifte Klammer `}`, welchen den **scope schliesst**. Beide statements sind im **function body** drin. 

Nach der Function Declaration folgt ein weites statemant. Zuerst das Keyword `const` mit einem zugewiesenen Pointer `mytip`. Dies ist eine Variable die dazu gebraucht wird den zurückgegebenen Wert einzufangen. Nach dem Gleichheitszeichen `=` wird die Function aufgerufen. Diese referenziert die oben definierte Function mit dem Namen `calcTip`. In Klammern `(75, 10)` folgen dann die zwei **arguments** welche in der Funktion **parameter** genannt werden. Der Aufruf nach dem Gleichheitszeichen nennt man auch **function call**. Manchmal spricht man auch von **invoke a function** wenn die Function aufgerufen werden soll. 

Merke: Mit der Definition einer Function wird die Function nicht ausgeführt. Erst mit dem Aufruf der Function und übergabe der Argumente, falls vorhanden.  
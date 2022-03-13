---
title:  Ein Intro zu Arrow Function und ihre Spezifikas
date: 2020-03-08
collections: javascript
layout: post.hbs
excerpt: Wie schreibt man eine Arrow Function und auf was sollte dabei beachtet werden, wenn diese Schreibweise der Function Definition umgesetzt wird? Ein kleines Intro. 
---

Eine Arrow Function oder Fat Arrow Function oder einfach Pfeilfunktion hat im Vergleich zur der Function Expression oder der Function Declaration eine kürzere Syntax. Sie wird, je mehr man sie braucht, auch viel leserlicher als die Standart definition einer Function. Nehme wir das Beispiel mit der Fläche des Quadrats:

```js
// Function Declaration
function square(x) {
  return x * x;
}

// Fat Arrow Function
const square = (x) => {
  return x * x;
}

// Fat Arrow Function gekürzt
const square = (x) => { return x * x; }

// Fat Arrow Function nochmehr gekürzt
const square = x => x * x;
```

Bei der letzten Schreibweise wurden die Klammer für den Parameter weggelassen. Die geschweiften Klammern können auch weggelassen werden, wenn nur ein Statement oder eine Expression folgt. Sollten aber 2 Parameter übergeben werden, dann sind die Klammern wieder nötig. Ebenfalls nötig sind die Klammern wenn gar kein Paramateer bestimmt wird. 

```js
// Mit zwei Parameter
const surface = (x, y) => x * y;
surface(3, 4); // -> 12

// Mit keinem Parameter
const surface = () => console.log(`Hallo`);
surface(); // -> Hallo

// Mit mehreren Statements
const greet = age => {
  let greetings = (`Your are ${age} year old`);
  let quote = `and stll cool`;
  let concate = `${greetings} ${quote}`;
  console.log(concate); 
} 
greet(56); // -> Your are 56 year old and still cool
```

Daneben gibt es noch mehr zu beachten, wenn man mit Arrow Functions arbeitet. Dazu mehr in einem weiteren Beitrag. Sei mal gesagt, dass das this keyword, arguments binding und constructor anderst sind als bei normalen Function Definitionen wie auch der Scope und die Bereitstellung im Codeverlauf.


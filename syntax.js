console.log([1,2,3].map(x => x * x));

for(let x of [1,2,3]) {
	console.log(x);
}

console.log(Array.of(1,2,3));

var s = new Set();
s.add("one").add("one");
s.add("two").add("two");
console.log("s.size = " + s.size);

var m = new Map();
var o = {"hello": "world"};
m.set(o, "object as key");
m.set("chengdu", "028");
console.log("keys = " + m.keys());
console.log("values = " + m.values());
console.log("entries = " + m.entries());
console.log(m.get(o));

console.log(Array.from(new Set([1,2,1,2])));

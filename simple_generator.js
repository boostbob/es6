function* quips(name) {  
	yield "hello " + name + "!";  
	yield "i hope you are enjoying the blog posts";  
	if (name.startsWith("X")) {  
		yield "it's cool how your name starts with X, " + name;  
	}  
	yield "see you later!";  
} 

var iter = quips("jorendorff");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
class Human {
	constructor(private name: string) {
		//
	}
	
	talk() {
		console.error(this.name);
	}
}

let human = new Human('zhangsan');
human.talk();

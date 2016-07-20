class User {
    包含角色(role) {
		return true;
	}
	
	get 班级家长总数() {
		return 18;
	}
}

class Special {
	get 没有到期() {
		return true;
	}
	
	get 次数可用() {
		return true;
	}
}

function execute(str) {
	String.prototype.replaceAll = function(t, r) {
		return this.split(t).join(r);
	};

	str = str.replaceAll("用户 ", "用户.");
	str = str.replaceAll("特权 ", "特权.");	
	str = str.replaceAll(" 并且 ", " && ");
	str = str.replaceAll(" 或者 ", " || ");
	
	console.log(str);
	let pass = false;
	let message = null;
	eval("pass, message = (function(){return " + str + ";})()");
	console.log(pass, message);
}

let 用户 = new User();
let 特权 = new Special();

let 老师 = "老师";
let 家长 = "家长";

let 检测通过 = "检测通过";

execute("用户 包含角色(老师) 并且 用户 班级家长总数 >= 15, null");
execute("特权 没有到期 或者 特权 次数可用, 检测通过");
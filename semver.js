const semver = require("semver");

console.error(semver.valid('1.2.3'));
console.error(semver.valid('a.b.c'));

console.error(semver.gt('1.2.3', '9.8.7'));
console.error(semver.inc('1.2.3', 'prerelease', 'beta'));

let user_agent = "android/6.0/Meizu/4.2.2/wifi/U20/arm64-v8a/unknown";
let version = user_agent.split("/")[3];


if (semver.lt(version, '4.2.3'))
{
	console.error("低版本 " + version);	
}
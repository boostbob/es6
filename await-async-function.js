const rp = require('request-promise')

console.log(process.version)
console.log(process.versions)

async function main () {
  const result = await rp('https://www.baidu.com')
  const twenty = await 100
  
  // sleeeeeeeeping  for a second 💤
  await new Promise (resolve => {
    setTimeout(resolve, 3000)
  })
  
  // throw new Error('报错啦')
  
  return result
}

main()
  .then(console.log)
  .catch(console.error)
const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless()
  const url = 'http://test-appstatic.yiqijiao.net/static/find/topicdetail?productId=5930fc523ef4a257e8aa7ed8&topicId=598da108b3d2b006f852314a&categoryType=1'
//  const url = 'http://test-appstatic.yiqijiao.net/static/find/topicdetail?productId=59b26ea5f0396e04518e2fab&topicId=59b26ea6f5dd8204f5194bb0&categoryType=1'
  const screenshot = await chromeless
    .goto(url)
    .wait(3000)
    .screenshot()
    // .pdf()
  console.log(screenshot)
  await chromeless.end()
}

run().catch(console.error.bind(console))
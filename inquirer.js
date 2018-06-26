const inquirer = require('inquirer');

async function main() {
  let answers = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'Can i do help you?',
      choices: ['wait', 'break', 'exit']
    }
  ])
}

main();
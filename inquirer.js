const inquirer = require('inquirer');

async function main() {
  let answers;
  
  answers = await inquirer.prompt([
    {
      name: 'action',
      type: 'confirm'
    },
    {
      name: 'action',
      type: 'list',
      message: 'Can i do help you?',
      choices: ['wait', 'break', 'exit']
    }
  ]);
  
  // answers = await inquirer.prompt([
  //   {
  //     name: 'action',
  //     type: 'list',
  //     message: 'Can i do help you?',
  //     choices: ['wait', 'break', 'exit']
  //   }
  // ]);
  
  // { action: 'break' }
  console.error(answers);
}

main();
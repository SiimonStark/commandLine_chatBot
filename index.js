const inquirer = require('inquirer');
const [GPT3, DALLE] = require('./chatCommands');

function runInit() {
    console.log('Command Line Bot 🤖');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'textPrompt',
                message: "Please provide the text based prompt. Be as specific as needed.",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter at least one character.';
                },
            }
        ]).then((answer) => {
            requestService(answer.textPrompt);
        });
}

function requestService(chatPrompt) {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'promptType',
                message: 'Which service would you like to use?',
                choices: [
                    'GPT3',
                    'DALLE',
                    'CODEC',
                    '**Abort**',
                    'Rewrite Prompt'
                ]
            }
        ]
    ).then((choice) => {
        console.log('You chose = ', choice);
        switch (choice.promptType) {
            case 'GPT3':
                console.log('Run GPT3...');
                GPT3(chatPrompt);
                break;
            case 'DALLE':
                console.log('Run DALLE...');
                DALLE(chatPrompt);
                break;
            case 'CODEC':
                console.log('This hasn\'t been built out yet');
                break;
            case 'Rewrite Prompt':
                console.log('Rerunning init func()');
                runInit();
                break;
            default:
                console.log('Aborting...');
                break;
        }
    })
}

runInit();
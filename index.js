// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'projectTitle',
		message: 'What is the title of your project?',
		validate: projectTitleInput => {
			if (projectTitleInput) {
				return true;
			} else {
				console.log('I need a title for your project, please!');
				return false;
			}
		}
	},
		{
		type: 'input',
		name: 'tldr',
		message: 'Please enter the TLDR description of your portfolio:',
		validate: tldr => {
			if (tldr) {
				return true;
			} else {
				console.log('I know you can write 1 line of code describing your project :-)');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please enter a long description of your portfolio:',
		validate: desctiption => {
			if (desctiption) {
				return true;
			} else {
				console.log('In order to prepare a well polished README, please enter a description of your project');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What packages or other installations are necessary for your project?',
		validate: installation => {
			if (installation) {
				return true;
			} else {
				console.log('Please be sure to include any installation or package instructions, if there are none, please write "none"');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'useInfo',
		message: 'How do users use this application?',
		validate: useInfo => {
			if (useInfo) {
				return true;
			} else {
				console.log('Please be sure to include usage information, if there is none please write "none"');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'contribute',
		message: 'How does one contribute to this project?',
		validate: contribute => {
			if (contribute) {
				return true;
			} else {
				console.log('Please be sure to include contribution information, if there is none please write "none"');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'testing',
		message: 'How does one test this project?',
		validate: testing => {
			if (testing) {
				return true;
			} else {
				console.log('Please be sure to include testing information, if there is none please write "none"');
				return false;
			}
		}
	},
	{
		type: 'checkbox',
		name: 'licenses',
		message: 'Which licenses does this project include?)',
		choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'CC0', 'EPL 1.0', 'GPLv3', 'IPL 1.0', 'ISC', 'MIT', 'MPL 2.0', 'ODC', 'Perl', 'Artistic 2.0', 'OFL 1.1', 'Unlicense', 'WTFPL', 'Zlib']
	},
	{
		type: 'confirm',
		name: 'confirmAbout',
		message: 'Would you like to enter some information about yourself for a "How to Contact me" section?',
		default: true
	},
	{
		type: 'input',
		name: 'about',
		message: 'Provide some information about how to contact you:',
		when: ({ confirmAbout }) => {
			if (confirmAbout) {
				return true;
			} else {
				return 'Please do not contact me';
			}
		}
	},
	{
		type: 'input',
		name: 'githubName',
		message: 'What is your GitHub name?',
		validate: githubNameInput => {
			if (githubNameInput) {
				return true;
			} else {
				console.log('Please share your githubName');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'emailAddress',
		message: 'What is your email address?',
		validate: emailAddressInput => {
			if (emailAddressInput) {
				return true;
			} else {
				console.log('Please share your email');
				return false;
			}
		}
	}
];

// Create a function to initialize app
function init() {
	return inquirer
	.prompt(questions)
	.then(appData => {

		const template = generateMarkdown(appData);
		
		fs.writeFile('./dist/README.md', template, err => {
		if (err) throw new Error(err);

		console.log('Portfolio complete! Check out README.md to see the output!');
		});
	});
};

// Function call to initialize app
init();

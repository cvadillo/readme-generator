// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
	return inquirer
	.prompt([
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
			name: 'description',
			message: 'Please enter a description of your portfolio',
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
			type: 'confirm',
			name: 'confirmAbout',
			message: 'Would you like to enter some information about yourself for an "About" section?',
			default: true
		},
		{
			type: 'input',
			name: 'about',
			message: 'Provide some information about yourself:',
			when: ({ confirmAbout }) => {
				if (confirmAbout) {
					return true;
				} else {
					return false;
				}
			}
		}
	]);
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

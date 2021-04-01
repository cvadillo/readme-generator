function badgeGenerator(data) {

	const badgeArr = [];

		for (let i = 0; i < data.licenses.length; i++) {
			switch (data.licenses[i]) {
				case 'Apache 2.0':
					badgeArr.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
					break;
				case 'Boost 1.0':
					badgeArr.push('[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)');
					break;
				case 'BSD 3-Clause':
					badgeArr.push('[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)');
					break;
				case 'CC0':
					badgeArr.push('[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/');
					break;
				case 'EPL 1.0':
					badgeArr.push('[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)');
					break;
				case 'GPLv3':
					badgeArr.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
					break;
				case 'IPL 1.0':
					badgeArr.push('[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)');
					break;
				case 'ISC':
					badgeArr.push('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)');
					break;
				case 'MIT':
					badgeArr.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
					break;
				case 'MPL 2.0':
					badgeArr.push('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
					break;
				case 'ODC':
					badgeArr.push('[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)');
					break;
				case 'Perl':
					badgeArr.push('[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)');
					break;
				case 'Artistic 2.0':
					badgeArr.push('[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)');
					break;
				case 'OFL 1.1':
					badgeArr.push('[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)');
					break;
				case 'Unlicense':
					badgeArr.push('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)');
					break;
				case 'WTFP':
					badgeArr.push('[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)');
					break;
				case 'Zlib':
					badgeArr.push('[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)');
					break;
				default : 
					badgeArr.push('');
					break;
			}
		}
	return badgeArr;
};

function generateMarkdown(data) {
	return `# ${data.projectTitle}

## TLDR:

${data.tldr}

## Badges

${badgeGenerator(data)}

### Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution Guidelines](#contributing)
4. [Testing Instructions](#testing)
7. [licenses](#licenses)
8. [Questions](#FAQ)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.useInfo}

## Contributing

${data.contribute}

## Testing

${data.testing}

## Licenses

This application is covered by the following licenses:
${data.licenses}

## FAQ

${data.about}

GitHub Name: ${data.githubName}
[Github Profile](https://github.com/${data.githubName})
email: ${data.emailAddress}

	`;
}

module.exports = generateMarkdown;

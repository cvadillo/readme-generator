function generateMarkdown(data) {
  return `# ${data.projectTitle}

${data.tldr}

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

${data.licenses}

## FAQ

${data.about}
${data.githubName}
${data.emailAddress}

`;
}

module.exports = generateMarkdown;

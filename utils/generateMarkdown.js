// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license !== "None"){
  //   return `[License: license]($(license))`
  // }
  // return "";
  switch (license){
    case 'MIT' : 
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)`
      break;
    case 'Apache' :
      return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    default :
    return "";

  }

}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(license !== "None"){
//   return `\n * [License](# license) \n`
//   }
//   return "";
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License;

    This project is licensed under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let whichLic = renderLicenseBadge(data.license);
  return `# ${data.projectTitle}
  ## Table of Contents

### -github username
### -email address
-project title
-project description
-license

# Github Username
${data.githubUsername}

# Email Address
${data.emailAddress}

# Project description
${data.desc}

# License
${whichLic}
`;
}


module.exports = generateMarkdown;

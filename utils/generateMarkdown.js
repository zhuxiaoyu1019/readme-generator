// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license.split(" ").join("_");
  return license !== "None" ? `![GitHub license](https://img.shields.io/badge/License-${license}-${data.color}.svg)` : "";
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURL = (license.split(" ").join("-")).toLowerCase();
  return license !== "None" ? `[${license}](https://choosealicense.com/licenses/${licenseURL}/)` : "";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return data.license !== "None" ? 
  `## License 
  Copyright (c) ${data.name} All rights reserved.
  
  Licensed under the ${renderLicenseLink(data.license)} license.` : "";
}

function renderUsageSection(use) {
  return use !== "" ? 
  `## Usage
  ${use}` : "";
}

function renderInstallSection(install) {
  return install !== "" ? 
  `## Installation
  To install necessary dependencies, run the following command:\n 
      ${install}` : "";
}

function renderContributeSection(contribute) {
  return contribute !== "" ? 
  `## Contributing
      ${contribute}` : "";
}

function renderTestSection(test) {
  return test !== "" ? 
  `## Tests
  To run test, run the follwoing command:\n
      ${test}` : "";
}

function renderTableContents(data) {
  let contents = "## Table of Contents";
  if (data.use !== "") {
    contents += "\n  * [Usage](#usage)";
  }
  if (data.install !== "") {
    contents += "\n  * [Installation](#installation)";
  }
  if (data.contribute !== "") {
    contents += "\n  * [Contributing](#contributing)";
  }
  if (data.test !== "") {
    contents += "\n  * [Tests](#tests)";
  }
  contents += "\n  * [Questions](#questions)";
  if (data.license !== "None") {
    contents += "\n  * [License](#license)";
  }
  return data.table ? contents : "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ${renderTableContents(data)}

  ${renderUsageSection(data.use)}

  ${renderInstallSection(data.install)}

  ${renderContributeSection(data.contribute)}

  ${renderTestSection(data.test)}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly @[${data.email}](${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).

  ${renderLicenseSection(data)}
  `;
}

module.exports = generateMarkdown;

# poc-gherkin-testcafe
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fronaldvandenbroek%2Fpoc-gherkin-testcafe.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fronaldvandenbroek%2Fpoc-gherkin-testcafe?ref=badge_shield)

 A proof of concept testing the coupling between Gherkin (using Cucumber) and TestCafé.
 
## Setup
[Gherkin-TestCafé](https://github.com/kiwigrid/gherkin-testcafe)

 Install Gherkin, TestCafé and Cucumber: 
 
 `npm i gherkin-testcafe cucumber testcafe`
 
 Run tests:
 
 `npx gherkin-testcafe firefox tests/steps/*.js tests/features/*.feature`
 
#### Optional
 Add the following to the package.json test script:
 
  ```
  "scripts": {
    "test:command": "npx gherkin-testcafe firefox tests/steps/*.ts tests/steps/*.js tests/features/*.feature",
    "test:runner": "node tests/runner.js"
  }
  ```
  
 Run the tests:
 
 `npm run test:command` or `npm run test:runner`


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fronaldvandenbroek%2Fpoc-gherkin-testcafe.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fronaldvandenbroek%2Fpoc-gherkin-testcafe?ref=badge_large)
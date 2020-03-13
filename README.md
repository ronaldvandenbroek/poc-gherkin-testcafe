# poc-gherkin-testcafe
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

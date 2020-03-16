# poc-gherkin-testcafe
 A proof of concept testing the coupling between Gherkin (using Cucumber), TestCafé and Allure.
 
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

 ## Test reporter
 To create a visual report [Allure](http://allure.qatools.ru/) can be used together with the [testcafe-reporter-allure](https://www.npmjs.com/package/testcafe-reporter-allure) package.

 Install the integration and Allure commandline:

 `npm install testcafe-reporter-allure`

 `npm install -g allure-commandline`

 To generate the results add the following to the `runner.js` file.

  ```
  .reporter([
    {
        name: 'allure',
    },
  ])
  ```

  or add `--reporter allure` to the command.

  To visualise the results in a report run the following command in the root of the project:

  `allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report`

  NOTE: It is currently not possible to display the step data in the allure report. 
  To implement this the `testcafe-reporter-allure` will have to be extended.
// const createTestCafe = require('testcafe');
const createTestCafe = require('gherkin-testcafe');

module.exports = async () => {
    const testcafe = await createTestCafe();
    const runner = await testcafe.createRunner();
    // const remoteConnection = await testcafe.createBrowserConnection();

    return runner
        .src(['tests/steps/*.js', 'tests/features/*.feature'])
        .browsers('firefox')
        .run();
};
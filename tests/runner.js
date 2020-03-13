// const createTestCafe = require('testcafe');
const createTestCafe = require('gherkin-testcafe');

(async () => {
    console.log(`Starting runner.js`)
    const testcafe = await createTestCafe()
    // const runner = testcafe.createLiveModeRunner()
    const runner = testcafe.createRunner()

    const failedCount = await runner
        .src(['tests/steps/*.ts', 'tests/steps/*.js', 'tests/features/*.feature'])
        .browsers('firefox:headless')
        .reporter([
            {
                name: 'spec',
            },
        ])
        .screenshots(
            'tests/screenshots',
            true,
            '${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png',
            true,
        )
        .run()

    console.error(`TestCafé failed tests: ${failedCount}`)
    testcafe.close()
})()

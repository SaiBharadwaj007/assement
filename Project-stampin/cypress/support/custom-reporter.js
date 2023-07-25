// cypress/support/custom-reporter.js
class CustomReporter {
    constructor(runner) {
      this.runner = runner;
    }
  
    // This method captures the 'test:after:run' event
    // and logs the custom message to the Cypress Test Runner
    reportTestResults(test, runnable) {
      const { state } = runnable;
      const message = `Test "${runnable.title}" ${state}`;
      Cypress.log({
        name: 'custom-reporter',
        displayName: 'Custom Reporter',
        message,
        consoleProps: () => {
          return {
            Test: runnable.title,
            State: state,
          };
        },
      });
    }
  }
  
  module.exports = (on, config) => {
    on('after:run', (results) => {
      const customReporter = new CustomReporter(results);
      customReporter.reportTestResults(results);
    });
  };
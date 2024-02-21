export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true,
      waitForNavigation: 'load',
      restart: 'keep'
    }
  },
  gherkin: {
    features: './features/*.feature',  
    steps: ['./step_definitions/steps.js'] 
  },
  include: {
    I: './steps_file',
    loginPage: './pages/login.ts',
    loginManualPage: './pages/loginManual.ts'
  },
  name: 'swag-labs-codeceptjs'
}
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

new Promise(function(resolve, reject) {
  rl.question('[PRECOMMIT] Run all test suites? (Y/n) ', function(answer) {
    if (answer.toLowerCase() === 'y') {
      execSync('npm run test -- precommit', { stdio: 'inherit' }, function(
        error,
        stdout,
        stderr
      ) {
        if (error) {
          console.log('ERR: Exiting with code', error.code);
          console.log(stderr.toString());
        }
      });
    }
    rl.question('[PRECOMMIT] Test optimized production build? (Y/n) ', function(
      answer
    ) {
      if (answer.toLowerCase() === 'y') {
        execSync('npm run build', { stdio: 'inherit' }, function(
          error,
          stdout,
          stderr
        ) {
          if (error) {
            console.log('ERR: Exiting with code', error.code);
            console.log(stderr.toString());
          }
        });
      }
      rl.close();
    });
  });
}).then(function() {
  console.log('Running pretty-quick');
});

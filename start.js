const { exec } = require('child_process');

// Set environment variables if needed
process.env.PATH += `:${process.cwd()}/node_modules/.bin`;
process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Install dependencies, build and start the Next.js application
exec('npm install sharp --unsafe-perm && npm install && npx next build && npx next start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Error output: ${stderr}`);
    return;
  }

  console.log(`Application output: ${stdout}`);
});

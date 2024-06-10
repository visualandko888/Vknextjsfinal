const { exec } = require('child_process');

// Set environment variables if needed
process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Install dependencies, including sharp, clean cache, build and start the Next.js application
exec('npm install sharp && npm install && npx next build && npx next start', (error, stdout, stderr) => {
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


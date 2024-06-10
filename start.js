const { exec } = require('child_process');

// Set environment variables if needed
process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Start the Next.js application
exec('npx next start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting the application: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Error output: ${stderr}`);
    return;
  }

  console.log(`Application output: ${stdout}`);
});

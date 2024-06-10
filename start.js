const { exec } = require('child_process');

console.log('Starting setup...');

// Set environment variables if needed
process.env.PATH += `:${process.cwd()}/node_modules/.bin:${process.env.HOME}/.npm-global/bin`;
process.env.PORT = process.env.PORT || 6000;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

console.log('Environment variables set.');
console.log('Installing dependencies...');

// Install dependencies, build and start the Next.js application
const command = `npm install sharp --unsafe-perm && npm install && npx next build && PORT=6000 npx next start`;
exec(command, (error, stdout, stderr) => {
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

console.log('Setup script executed.');
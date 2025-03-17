const sonarScanner = require('sonarqube-scanner'); // Correctly require the scanner

// Start the SonarQube scan
sonarScanner(
  {
    serverUrl: 'http://localhost:9001',  // Ensure the SonarQube server is running
    token: 'e685df374f8472b593d459ca2ed08025395f13e6',  // Your authentication token
    options: {
      'sonar.projectName': 'grocery_basket',
      'sonar.projectKey': 'grocery_basket',
      'sonar.sources': 'src',
      'sonar.ignore':
        'src/**/*.test.js,src/**/*.spec.js,src/**/*.test.jsx,src/**/*.spec.jsx,android/**,ios/**,node_modules/**',
    },
  },
  () => process.exit() // Exit after scan
);

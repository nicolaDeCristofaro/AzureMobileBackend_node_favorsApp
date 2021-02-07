var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Users');
mobileApp.tables.add('Reviews');
mobileApp.tables.add('Keywords');
mobileApp.tables.add('Favors');
mobileApp.tables.add('Favors_Keywords');
mobileApp.tables.add('Favors_Candidates');

// Provide initialization of any tables that are statically defined.
mobileApp.tables.initialize().then(function () {
    // Add the Mobile API so it is accessible as a Web API.
    app.use(mobileApp);

    // Start listening on HTTP.
    app.listen(process.env.PORT || 3000);
});

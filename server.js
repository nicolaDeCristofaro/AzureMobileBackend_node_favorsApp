var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Users');
mobileApp.tables.add('Reviews');
mobileApp.tables.add('Keywords');
mobileApp.tables.add('Favors');
mobileApp.tables.add('Favors_Keywords');
mobileApp.tables.add('Favors_Candidates');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);

var table = module.exports = require('azure-mobile-apps').table();

// Define the columns within the table.
table.columns = {
    "idFavor": "string",
    "idKeyword": "string"
};

// Turn off the dynamic schema.
table.dynamicSchema = false;

table.read(function (context) {
    return context.execute();
});

table.insert(function (context) {
    return context.execute();
});

table.update(function (context) {
    return context.execute();
});

table.delete(function (context) {
    return context.execute();
});
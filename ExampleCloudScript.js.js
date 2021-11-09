///////////////////////////////////////////////
// JenkinsConsoleUtility CloudScript functions
///////////////////////////////////////////////
var TEST_TITLE_ID = "6195"; // NOTE: Replace this with your own titleID - DeleteUsers has an additional security check to avoid accidents
var TEST_DATA_KEY = "TEST_DATA_KEY"; // Used to reuse args.customId, but it was kindof a pain, and made things fragile

var HelloWorld = function (args, context) {
    return "HelloWorld";
};
handlers.helloWorld = HelloWorld;

var calculator = function(a, b){
    return a + b;
}
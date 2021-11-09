///////////////////////////////////////////////
// JenkinsConsoleUtility CloudScript functions
///////////////////////////////////////////////
var TEST_TITLE_ID = "6195"; // NOTE: Replace this with your own titleID - DeleteUsers has an additional security check to avoid accidents
var TEST_DATA_KEY = "TEST_DATA_KEY"; // Used to reuse args.customId, but it was kindof a pain, and made things fragile

handlers.helloWorld = function(args, content) {
    let msg = "Tobi, Hello world";
    return msg;
};

var calculator = function(a, b){
    return a + b;
}

handlers.addition = function(args, content){
    var a = args.a;
    let b = args.b;
    return calculator(a , b);
}
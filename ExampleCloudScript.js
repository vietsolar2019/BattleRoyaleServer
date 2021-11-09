///////////////////////////////////////////////
// JenkinsConsoleUtility CloudScript functions
///////////////////////////////////////////////
var TEST_TITLE_ID = "6195"; // NOTE: Replace this with your own titleID - DeleteUsers has an additional security check to avoid accidents
var TEST_DATA_KEY = "TEST_DATA_KEY"; // Used to reuse args.customId, but it was kindof a pain, and made things fragile
var HelloWorld = function (args, context) {
    var message = "Hello " + currentPlayerId + "!";
    log.info(message);
    var inputValue = null;
    if (args && args.hasOwnProperty("inputValue"))
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: inputValue });
    return { messageValue: message };
};
handlers["helloWorld"] = HelloWorld;
var ThrowError = function (args) {
    var testObject = undefined;
    var failureObj = testObject.doesnotexist.doesnotexist;
    return failureObj; // Can't get to here
};
handlers["throwError"] = ThrowError;
var EasyLogEvent = function (args) {
    log.info(JSON.stringify(args.logMessage));
};
handlers["easyLogEvent"] = EasyLogEvent;
///////////////////////////////////////////////
// JenkinsConsoleUtility CloudScript functions
///////////////////////////////////////////////
var TestDataExists = function (args) {
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: [TEST_DATA_KEY]
    });
    return playerData.Data.hasOwnProperty(TEST_DATA_KEY);
};
handlers["TestDataExists"] = TestDataExists;
var GetTestData = function (args) {
    var testResults = null;
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: [TEST_DATA_KEY]
    });
    if (playerData.Data.hasOwnProperty(TEST_DATA_KEY)) {
        log.info("Returning Data: " + playerData.Data[TEST_DATA_KEY].Value);
        testResults = JSON.parse(playerData.Data[TEST_DATA_KEY].Value);
        var data = {};
        data[TEST_DATA_KEY] = null;
        server.UpdateUserInternalData({
            PlayFabId: currentPlayerId,
            Data: data
        });
    }
    else {
        log.info("Expected data not found in: " + JSON.stringify(playerData));
    }
    return testResults;
};
handlers["GetTestData"] = GetTestData;
var SaveTestData = function (args) {
    var data = {};
    data[TEST_DATA_KEY] = JSON.stringify(args.testReport);
    log.info("Saving Data (" + currentPlayerId + "): " + JSON.stringify(data));
    server.UpdateUserInternalData({
        PlayFabId: currentPlayerId,
        Data: data
    });
};
handlers["SaveTestData"] = SaveTestData;
//# sourceMappingURL=ExampleCloudScript.js.map
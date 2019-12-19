restService.post("/echo", function (req, res) {
    var speech =
      req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.echoText
        ? req.body.queryResult.parameters.echoText
        : "Seems like some problem. Speak again.";
  
    var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "Hi, Welcome to test app"
              }
  
  
            }
          ]
        }
      }
    };
  
    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
      speech: speech,
      displayText: speech,
      source: "webhook-echo-sample"
    });
  });
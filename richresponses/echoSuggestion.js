restService.post("/echoSuggestion", function (req, res) {
    var speech =
      req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.echoSuggestion
        ? req.body.queryResult.parameters.echoSuggestion
        : "Seems like some problem. Speak again.";
  
    var speechSuggestion = {
      google: {
        expectUserRespons: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "Howdy! I can tell you fun facts about almost any number."
              }
            },
            {
              simpleResponse: {
                textToSpeech: "What number do you have in mind?"
              }
            }
          ],
          suggestions: [
            {
              title: "25"
            },
            {
              title: "45"
            },
            {
              title: "Never mind"
            }
          ],
          linkOutSuggestion: {
            destinationName: "Website",
            url: "https://assistant.google.com"
          }
        }
      }
    };
    return res.json({
      payload: speechSuggestion,
      fulfillmentText: speech,
      speech: speech,
      displayText: speech,
      source: "webhook-echo-sample"
    });
  });
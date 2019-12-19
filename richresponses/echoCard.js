restService.post("/echoCard", function (req, res) {
    var speech = req.body.queryResult &&
      req.body.queryResult.parameters &&
      req.body.queryResult.parameters.echoCard
      ? req.body.queryResult.parameters.echoCard
      : "Seems like some problem. Speak again.";
  
    var speechCard = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "This is a Basic Card:"
              }
            },
            {
              basicCard: {
                title: "Sports Car",
                image: {
                  url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                  accessibilityText: "Car Logo"
                },
                buttons: [
                  {
                    title: "Show Next",
                    openUrlAction: {
                      url: "https://www.google.com/search?tbm=isch&sxsrf=ACYBGNSSMmxczQJSx9ypSO4P3PwA4ZZTxA:1576652621279&q=luxury+cars&chips=q:luxury+cars,g_1:bugatti:r8kSRqJHc8M%3D&usg=AI4_-kRe88Q5HDoQFnHMqwWwg1NPCWhdoA&sa=X&ved=0ahUKEwiJsLPb0L7mAhUZzDgGHaRoBuoQ4lYILigC&biw=1366&bih=603&dpr=1"
                    }
                  }
                ],
                imageDisplayOptions: "WHITE"
              }
            }
          ]
        }
      }
    }
  
    return res.json({
      payload: speechCard,
      //data: speechResponse,
      fulfillmentText: speech,
      speech: speech,
      displayText: speech,
      source: "webhook-echo-sample"
    });
  });
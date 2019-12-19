restService.post("/echoTableCard", function (req, res) {
    var speech =
      req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.echoTableCard
        ? req.body.queryResult.parameters.echoTableCard
        : "Seems like some problem. Speak again.";
  
    var speechTableCard = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "Hi, Welcome to test app"
              }
            },
            {
              tableCard: {
                title: "Car Title",
                subtitle: "This Shows type of cars",
                image: {
                  url: "",
                  accessibilityText: "Image description for screen readers"
                },
                columnProperties: [
                  {
                    header: "Header 1"
                  },
                  {
                    header: "Header 2",
                    horizontalAlignment: "CENTER"
                  },
                  {
                    header: "Header 3",
                    horizontalAlignment: "CENTER"
                  }
                ],
                rows: [
                  {
                    cells: [
                      {
                        text: "Cell A1"
                      },
                      {
                        text: "Cell A2"
                      },
                      {
                        text: "Cell A3"
                      },
                      {
  
                        dividerAfter: true
                      }
                    ]
  
                  },
                  {
                    cells: [
                      {
                        text: "Cell B1"
                      },
                      {
                        text: "Cell B2"
                      },
                      {
                        text: "Cell B3"
                      }
                    ]
                  },
                  {
                    cells: [
                      {
                        text: "Cell C1"
                      },
                      {
                        text: "Cell C2"
                      },
                      {
                        text: "Cell C3"
                      }
                    ]
                  }
                ],
                buttons: [
                  {
                    title: "Button title",
                    openUrlAction: {
                      url: ""
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  
    return res.json({
      payload: speechTableCard,
      fulfillmentText: speech,
      speech: speech,
      displayText: speech,
      source: "webhook-echo-sample"
    });
  });
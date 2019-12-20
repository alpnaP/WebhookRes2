"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const restService = express();
restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);
restService.use(bodyParser.json());


// //import responses
// const echo = require('./richresponses/echo');
// const echoCard = require('./richresponses/echoCard');
// const echoTableCard = require('./richresponses/echoTableCard');
// const echoSuggestion = require('./richresponses/echoSuggestion');

// //



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
              textToSpeech: "Hi, Welcome to my echo app. Which response would you like to see next."
            }


          }
        ]
      }
    }
  };

  return res.json({
    payload: speechResponse,
    fulfillmentText: speech,
    speech: speech,
    displayText: speech,
  });
});

// This is for echoCard
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

// this is the example Table card
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

//This is the example of suggestion Chips
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
              "textToSpeech": "What number do you have in mind?"
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

// This is the example of LIST
restService.post("/echoList", function (req, res) {
  var speech =
    req.body.queryResult &&
      req.body.queryResult.parameters &&
      req.body.queryResult.parameters.echoList
      ? req.body.queryResult.parameters.echoList
      : "Seems like some problem. Speak again.";

  var speechList = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: "Hi, this shows the list item"
            }
          }
        ]
      },
      systemIntent: {
        intent: "actions.intent.OPTION",
        data: {
          "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
            listSelect: {
              title: "Hello",
              items: [
                {
                  optionInfo: {
                    key: "first title key"
                  },
                  description: "first description",
                  image: {
                    url: "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                    accessibilityText: "first alt"
                  },
                  title: "first title"
                },
                {
                  optionInfo: {
                    key: "second"
                  },
                  description: "second description",
                  image: {
                    url: "ttps://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                    accessibilityText: "second alt"
                  },
                  title: "second title"
                }
              ]
            }
          }
        
      }
    }
  };

  return res.json({
    payload: speechList,
    data: speechList,
    fulfillmentText: speech,
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});
// this is the example of of media Response
restService.post("/echoMedia", function (req, res) {
  var speech =
    req.body.queryResult &&
      req.body.queryResult.parameters &&
      req.body.queryResult.parameters.echoMedia
      ? req.body.queryResult.parameters.echoMedia
      : "Seems like some problem. Speak again.";

  var speechMedia = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: "Hi, Welcome to my test media app"
            }
          }
        ],
        
            type: "media_content",
           
        mediaType: "AUDIO",
          mediaObjects: [
            {
              name: "Media content card title",
              description: "Media content card description",
              largeImage: {
                url: "https://google.com",
                accessibilityText: "Image description for screen readers"
              },
              contentUrl: "https://gaana.com/song/jab-koi-baat-bigad-jaye-3"
            }
          ]
  }
}
    
  };
    
  

  return res.json({
  payload: speechMedia,
  //data: speechResponse,
  fulfillmentText: speech,
  speech: speech,
  displayText: speech,
  source: "webhook-echo-sample"
});
});

//this is example of carousel Response

restService.post("/echoCarousel", function (req, res) {
  var speech =
    req.body.queryResult &&
      req.body.queryResult.parameters &&
      req.body.queryResult.parameters.echoCarousel
      ? req.body.queryResult.parameters.echoCarousel
      : "Seems like some problem. Speak again.";

  var speechCarousel = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: "Choose a item"
            }
          },
          {
            description: "Option One Description",
            image: {
              url: "https://www.google.com/search?q=images+free+download+for++1200*1900&sxsrf=ACYBGNT4RvkDMp4c-1H2Tk5GOfhpD63Qzw:1576662840267&tbm=isch&source=iu&ictx=1&fir=CH4kZUlg3Le4zM%253A%252ChDNFQiEpDOftvM%252C_&vet=1&usg=AI4_-kSebhRyc8_s6JJ7LpzL8XcwTn1hGQ&sa=X&ved=2ahUKEwjj55jk9r7mAhX063MBHSGWBlwQ9QEwA3oECAoQCQ#imgrc=CH4kZUlg3Le4zM:",
              accessibilityText: "Image description for screen readers"
            },
            optionInfo: {
              key: "A",
              synonyms: [
                "thing one",
                "object one"
              ],
              textToSpeech: "Choose a item room"
            },
            title: "Room"
          },
          {
            description: "Option Two Description",
            image: {
              url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",

              accessibilityText: "Image description for screen readers"
            },
            optionInfo: {
              key: "B",
              synonyms: [
                "thing two",
                "object two"
              ]
            },
            title: "Car"
          }



        ],
        type: "carousel_card"
      }
    }
  }

  return res.json({
    payload: speechCarousel,
    //data: speechResponse,
    fulfillmentText: speech,
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 5000, function () {
  console.log("Server up and listening");
});
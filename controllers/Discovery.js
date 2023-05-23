'use strict';

var utils = require('../utils/writer.js');
var Discovery = require('../service/DiscoveryService');

module.exports.bizLocationsBizLocationEventsOPTIONS = function bizLocationsBizLocationEventsOPTIONS (req, res, next, bizLocation, gS1Extensions) {
  Discovery.bizLocationsBizLocationEventsOPTIONS(bizLocation, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizLocationsBizLocationOPTIONS = function bizLocationsBizLocationOPTIONS (req, res, next, bizLocation) {
  Discovery.bizLocationsBizLocationOPTIONS(bizLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizLocationsOPTIONS = function bizLocationsOPTIONS (req, res, next, gS1Extensions) {
  Discovery.bizLocationsOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizStepsBizStepEventsOPTIONS = function bizStepsBizStepEventsOPTIONS (req, res, next, bizStep, gS1Extensions) {
  Discovery.bizStepsBizStepEventsOPTIONS(bizStep, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizStepsBizStepOPTIONS = function bizStepsBizStepOPTIONS (req, res, next, bizStep, gS1Extensions) {
  Discovery.bizStepsBizStepOPTIONS(bizStep, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizStepsOPTIONS = function bizStepsOPTIONS (req, res, next, gS1Extensions) {
  Discovery.bizStepsOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.captureCaptureIDOPTIONS = function captureCaptureIDOPTIONS (req, res, next, captureID, gS1Extensions) {
  Discovery.captureCaptureIDOPTIONS(captureID, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.captureOPTIONS = function captureOPTIONS (req, res, next, gS1Extensions) {
  Discovery.captureOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dispositionsDispositionEventsOPTIONS = function dispositionsDispositionEventsOPTIONS (req, res, next, disposition, gS1Extensions) {
  Discovery.dispositionsDispositionEventsOPTIONS(disposition, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dispositionsDispositionOPTIONS = function dispositionsDispositionOPTIONS (req, res, next, disposition, gS1Extensions) {
  Discovery.dispositionsDispositionOPTIONS(disposition, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dispositionsOPTIONS = function dispositionsOPTIONS (req, res, next, gS1Extensions) {
  Discovery.dispositionsOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epcsEpcEventsOPTIONS = function epcsEpcEventsOPTIONS (req, res, next, epc, gS1Extensions) {
  Discovery.epcsEpcEventsOPTIONS(epc, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epcsEpcOPTIONS = function epcsEpcOPTIONS (req, res, next, epc, gS1Extensions) {
  Discovery.epcsEpcOPTIONS(epc, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epcsOPTIONS = function epcsOPTIONS (req, res, next, gS1Extensions) {
  Discovery.epcsOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesEventTypeEventsOPTIONS = function eventTypesEventTypeEventsOPTIONS (req, res, next, eventType, gS1Extensions) {
  Discovery.eventTypesEventTypeEventsOPTIONS(eventType, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesEventTypeOPTIONS = function eventTypesEventTypeOPTIONS (req, res, next, eventType, gS1Extensions) {
  Discovery.eventTypesEventTypeOPTIONS(eventType, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesGET = function eventTypesGET (req, res, next, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax) {
  Discovery.eventTypesGET(gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesOPTIONS = function eventTypesOPTIONS (req, res, next, gS1Extensions) {
  Discovery.eventTypesOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsEventIDOPTIONS = function eventsEventIDOPTIONS (req, res, next, eventID, gS1Extensions) {
  Discovery.eventsEventIDOPTIONS(eventID, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsOPTIONS = function eventsOPTIONS (req, res, next, gS1Extensions) {
  Discovery.eventsOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesOPTIONS = function queriesOPTIONS (req, res, next, gS1Extensions) {
  Discovery.queriesOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameEventsOPTIONS = function queriesQueryNameEventsOPTIONS (req, res, next, queryName, gS1Extensions) {
  Discovery.queriesQueryNameEventsOPTIONS(queryName, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameOPTIONS = function queriesQueryNameOPTIONS (req, res, next, queryName, gS1Extensions) {
  Discovery.queriesQueryNameOPTIONS(queryName, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsOPTIONS = function queriesQueryNameSubscriptionsOPTIONS (req, res, next, queryName, gS1Extensions) {
  Discovery.queriesQueryNameSubscriptionsOPTIONS(queryName, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsSubscriptionIDOPTIONS = function queriesQueryNameSubscriptionsSubscriptionIDOPTIONS (req, res, next, queryName, subscriptionID, gS1Extensions) {
  Discovery.queriesQueryNameSubscriptionsSubscriptionIDOPTIONS(queryName, subscriptionID, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPointsOPTIONS = function readPointsOPTIONS (req, res, next, gS1Extensions) {
  Discovery.readPointsOPTIONS(gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPointsReadPointEventsOPTIONS = function readPointsReadPointEventsOPTIONS (req, res, next, readPoint, gS1Extensions) {
  Discovery.readPointsReadPointEventsOPTIONS(readPoint, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPointsReadPointOPTIONS = function readPointsReadPointOPTIONS (req, res, next, readPoint) {
  Discovery.readPointsReadPointOPTIONS(readPoint)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next, gS1Extensions, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax) {
  Discovery.rootGET(gS1Extensions, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootOPTIONS = function rootOPTIONS (req, res, next) {
  Discovery.rootOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

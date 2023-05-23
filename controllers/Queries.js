'use strict';

var utils = require('../utils/writer.js');
var Queries = require('../service/QueriesService');

module.exports.nextPageTokenTokenDELETE = function nextPageTokenTokenDELETE (req, res, next, token) {
  Queries.nextPageTokenTokenDELETE(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesGET = function queriesGET (req, res, next, nextPageToken, perPage, gS1Extensions, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax) {
  Queries.queriesGET(nextPageToken, perPage, gS1Extensions, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesPOST = function queriesPOST (req, res, next, body, gS1EPCISVersion, gS1CBVVersion, gS1Extensions) {
  Queries.queriesPOST(body, gS1EPCISVersion, gS1CBVVersion, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameDELETE = function queriesQueryNameDELETE (req, res, next, queryName) {
  Queries.queriesQueryNameDELETE(queryName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameEventsGET = function queriesQueryNameEventsGET (req, res, next, queryName, gS1Extensions, upgrade, connection, reportIfEmpty, initialRecordTime, second, minute, hour, dayOfMonth, month, dayOfWeek, stream, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat) {
  Queries.queriesQueryNameEventsGET(queryName, gS1Extensions, upgrade, connection, reportIfEmpty, initialRecordTime, second, minute, hour, dayOfMonth, month, dayOfWeek, stream, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameGET = function queriesQueryNameGET (req, res, next, queryName, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1Extensions) {
  Queries.queriesQueryNameGET(queryName, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsGET = function queriesQueryNameSubscriptionsGET (req, res, next, queryName, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax) {
  Queries.queriesQueryNameSubscriptionsGET(queryName, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsPOST = function queriesQueryNameSubscriptionsPOST (req, res, next, body, queryName, gS1Extensions, gS1EPCISVersion, gS1EPCFormat, gS1CBVXMLFormat) {
  Queries.queriesQueryNameSubscriptionsPOST(body, queryName, gS1Extensions, gS1EPCISVersion, gS1EPCFormat, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsSubscriptionIDGET = function queriesQueryNameSubscriptionsSubscriptionIDGET (req, res, next, queryName, subscriptionID, gS1EPCISMin, gS1EPCISMax, gS1Extensions) {
  Queries.queriesQueryNameSubscriptionsSubscriptionIDGET(queryName, subscriptionID, gS1EPCISMin, gS1EPCISMax, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unsubscribe = function unsubscribe (req, res, next, queryName, subscriptionID) {
  Queries.unsubscribe(queryName, subscriptionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

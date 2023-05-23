'use strict';

var utils = require('../utils/writer.js');
var Subscriptions = require('../service/SubscriptionsService');

module.exports.queriesQueryNameSubscriptionsGET = function queriesQueryNameSubscriptionsGET (req, res, next, queryName, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax) {
  Subscriptions.queriesQueryNameSubscriptionsGET(queryName, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsPOST = function queriesQueryNameSubscriptionsPOST (req, res, next, body, queryName, gS1Extensions, gS1EPCISVersion, gS1EPCFormat, gS1CBVXMLFormat) {
  Subscriptions.queriesQueryNameSubscriptionsPOST(body, queryName, gS1Extensions, gS1EPCISVersion, gS1EPCFormat, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameSubscriptionsSubscriptionIDGET = function queriesQueryNameSubscriptionsSubscriptionIDGET (req, res, next, queryName, subscriptionID, gS1EPCISMin, gS1EPCISMax, gS1Extensions) {
  Subscriptions.queriesQueryNameSubscriptionsSubscriptionIDGET(queryName, subscriptionID, gS1EPCISMin, gS1EPCISMax, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unsubscribe = function unsubscribe (req, res, next, queryName, subscriptionID) {
  Subscriptions.unsubscribe(queryName, subscriptionID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

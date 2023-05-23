'use strict';

var utils = require('../utils/writer.js');
var Capture = require('../service/CaptureService');

module.exports.captureCaptureIDGET = function captureCaptureIDGET (req, res, next, captureID, gS1Extensions, gS1EPCISMin, gS1EPCISMax) {
  Capture.captureCaptureIDGET(captureID, gS1Extensions, gS1EPCISMin, gS1EPCISMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.captureGET = function captureGET (req, res, next, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax) {
  Capture.captureGET(gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.capturePOST = function capturePOST (req, res, next, body, gS1Extensions, gS1EPCISVersion, gS1CBVVersion, gS1CaptureErrorBehaviour) {
  Capture.capturePOST(body, gS1Extensions, gS1EPCISVersion, gS1CBVVersion, gS1CaptureErrorBehaviour)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsPOST = function eventsPOST (req, res, next, body, gS1Extensions, gS1EPCISVersion, gS1CBVVersion) {
  Capture.eventsPOST(body, gS1Extensions, gS1EPCISVersion, gS1CBVVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

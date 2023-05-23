'use strict';

var utils = require('../utils/writer.js');
var TopLevel = require('../service/TopLevelService');

module.exports.bizLocationsBizLocationGET = function bizLocationsBizLocationGET (req, res, next, bizLocation, perPage, nextPageToken) {
  TopLevel.bizLocationsBizLocationGET(bizLocation, perPage, nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizLocationsGET = function bizLocationsGET (req, res, next, gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1EPCFormat) {
  TopLevel.bizLocationsGET(gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1EPCFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizStepsBizStepGET = function bizStepsBizStepGET (req, res, next, bizStep, gS1Extensions) {
  TopLevel.bizStepsBizStepGET(bizStep, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizStepsGET = function bizStepsGET (req, res, next, gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1CBVXMLFormat) {
  TopLevel.bizStepsGET(gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dispositionsDispositionGET = function dispositionsDispositionGET (req, res, next, disposition, gS1Extensions) {
  TopLevel.dispositionsDispositionGET(disposition, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dispositionsGET = function dispositionsGET (req, res, next, gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1CBVXMLFormat) {
  TopLevel.dispositionsGET(gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epcsEpcGET = function epcsEpcGET (req, res, next, epc, gS1Extensions) {
  TopLevel.epcsEpcGET(epc, gS1Extensions)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epcsGET = function epcsGET (req, res, next, gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1EPCFormat) {
  TopLevel.epcsGET(gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1EPCFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesEventTypeGET = function eventTypesEventTypeGET (req, res, next, eventType, gS1Extensions, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax) {
  TopLevel.eventTypesEventTypeGET(eventType, gS1Extensions, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesGET = function eventTypesGET (req, res, next, gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax) {
  TopLevel.eventTypesGET(gS1Extensions, nextPageToken, perPage, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  TopLevel.eventsGET(gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPointsGET = function readPointsGET (req, res, next, gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1EPCFormat) {
  TopLevel.readPointsGET(gS1Extensions, perPage, nextPageToken, gS1EPCISMin, gS1EPCISMax, gS1CBVMin, gS1CBVMax, gS1EPCFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPointsReadPointGET = function readPointsReadPointGET (req, res, next, readPoint, perPage, nextPageToken) {
  TopLevel.readPointsReadPointGET(readPoint, perPage, nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

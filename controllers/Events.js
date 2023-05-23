'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.bizLocationsBizLocationEventsGET = function bizLocationsBizLocationEventsGET (req, res, next, bizLocation, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.bizLocationsBizLocationEventsGET(bizLocation, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bizStepsBizStepEventsGET = function bizStepsBizStepEventsGET (req, res, next, bizStep, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.bizStepsBizStepEventsGET(bizStep, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dispositionsDispositionEventsGET = function dispositionsDispositionEventsGET (req, res, next, disposition, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.dispositionsDispositionEventsGET(disposition, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epcsEpcEventsGET = function epcsEpcEventsGET (req, res, next, epc, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.epcsEpcEventsGET(epc, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventTypesEventTypeEventsGET = function eventTypesEventTypeEventsGET (req, res, next, eventType, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.eventTypesEventTypeEventsGET(eventType, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsEventIDGET = function eventsEventIDGET (req, res, next, eventID, gS1Extensions, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat) {
  Events.eventsEventIDGET(eventID, gS1Extensions, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.eventsGET(gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, eQ_readPoint, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queriesQueryNameEventsGET = function queriesQueryNameEventsGET (req, res, next, queryName, gS1Extensions, upgrade, connection, reportIfEmpty, initialRecordTime, second, minute, hour, dayOfMonth, month, dayOfWeek, stream, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat) {
  Events.queriesQueryNameEventsGET(queryName, gS1Extensions, upgrade, connection, reportIfEmpty, initialRecordTime, second, minute, hour, dayOfMonth, month, dayOfWeek, stream, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readPointsReadPointEventsGET = function readPointsReadPointEventsGET (req, res, next, readPoint, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue) {
  Events.readPointsReadPointEventsGET(readPoint, gS1Extensions, nextPageToken, perPage, gS1CBVMin, gS1CBVMax, gS1EPCISMin, gS1EPCISMax, gS1EPCFormat, gS1CBVXMLFormat, eventType, gE_eventTime, lT_eventTime, gE_recordTime, lT_recordTime, eQ_action, eQ_bizStep, eQ_disposition, eQ_persistentDisposition_set, eQ_persistentDisposition_unset, wD_readPoint, eQ_bizLocation, wD_bizLocation, eQ_transformationID, mATCH_epc, mATCH_parentID, mATCH_inputEPC, mATCH_outputEPC, mATCH_anyEPC, mATCH_epcClass, mATCH_inputEPCClass, mATCH_outputEPCClass, mATCH_anyEPCClass, eQ_quantity, gT_quantity, gE_quantity, lT_quantity, lE_quantity, eQ_eventID, eXISTS_errorDeclaration, gE_errorDeclarationTime, lT_errorDeclarationTime, eQ_errorReason, eQ_correctiveEventID, orderBy, orderDirection, eventCountLimit, maxEventCount, gE_startTime, lT_startTime, gE_endTime, lT_endTime, eQ_type, eQ_deviceID, eQ_dataProcessingMethod, eQ_microorganism, eQ_chemicalSubstance, eQ_bizRules, eQ_stringValue, eQ_hexBinaryValue, eQ_uriValue, eQ_booleanValue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

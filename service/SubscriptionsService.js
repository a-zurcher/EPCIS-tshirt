'use strict';


/**
 * Returns active subscriptions with the option to use pagination if needed.
 * The `GET` endpoint is to list all active subscriptions on that query. 
 *
 * queryName QueryName The name of an EPCIS event query.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * nextPageToken NextPageToken  (optional)
 * perPage PerPage  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * returns List
 **/
exports.queriesQueryNameSubscriptionsGET = function(queryName,gS1Extensions,nextPageToken,perPage,gS1EPCISMin,gS1EPCISMax) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a query subscription.
 * EPCIS 2.0 implementations must support Webhook subscriptions. Creating a query subscription requires the client to provide a single endpoint to which the server will send events (as `EPCISQueryDocument`) and an optional string `signatureToken`. This `signatureToken` must be generated by the client and is used by the server to authenticate itself and sign messages when sending events. The signature must be contained on the `GS1-Signature` HTTP header of the server request.  The choice of signature type is implementation specific but examples would be using HMAC with SHA-256 directly or a wrapper supporting various symmetric or asymetric cryptographic algorithms such as Json Web Signature (JWS). When the client subscribes to a query, it must either set `stream` to `true`, to be notified whenever a new EPCIS event matches the query, or the client must define a query schedule. If these are missing the query subscription is invalid because the server won't know when to notify a client. ## Scheduled query: Receive query results at 1.05am A scheduled query subscription is a time-based query execution. EPCIS 2.0 scheduled queries are scheduled in the same manner as cron jobs. For example, this query subscription is scheduled to trigger every morning at 1.05am. By setting `reportIfEmpty` to `true`, the client's callback URL (`dest`) will be called even if there are no new events that match the query. ``` POST /queries/MyQuery/subscriptions {   \"dest\": \"https://client.example.com/queryCallback\",   \"signatureToken\": \"13df38d8275b13f05704629e5f1cf3d45d6132d5\",   \"reportIfEmpty\": true,   \"schedule\": {     \"hour\":\"1\",     \"minute\": \"5\"   } } ``` ## Streaming query subscription: Whenever a captured EPCIS event matches the query criteria If no query schedule is specified, the client must explicitly set `stream` to `true`. This restriction is to prevent clients from accidentally subscribing to EPCIS event streams. ``` POST /queries/MyQuery/subscriptions {   \"dest\": \"https://client.example.com/queryCallback\",   \"signatureToken\": \"13df38d8275b13f05704629e5f1cf3d45d6132d5\",   \"stream\": true } ``` 
 *
 * body QueryName_subscriptions_body  (optional)
 * queryName QueryName The name of an EPCIS event query.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * gS1EPCISVersion GS1-EPCIS-Version The EPCIS version.  (optional)
 * gS1EPCFormat GS1-EPC-Format Header used by the client to indicate whether EPCs are expressed as GS1 Digital Link URIs or as EPC URNs. It is also used by the server to announce which EPC formats are supported. If absent the default value is `Always_GS1_Digital_Link`:  - No_Preference: No preference in the representation, i.e. any format is accepted.  - Always_GS1_Digital_Link: URIs are returned as GS1 Digital Link.  - Always_EPC_URN: URIs are returned as URN.  - Never_Translates: EPCs are never translated, i.e. the original format is kept.  (optional)
 * gS1CBVXMLFormat GS1-CBV-XML-Format When requesting XML content-type only, users can use this header to request receiving events with CBV values in either URN or Web URI format. This option is not available for JSON/JSON-LD. - No_Preference: The server chooses the representation. - Always_Web_URI: CBV values are returned as Web URI. - Always_URN: CBV values are returned as URNs. - Never_Translates: The original format is kept.  (optional)
 * returns inline_response_201
 **/
exports.queriesQueryNameSubscriptionsPOST = function(body,queryName,gS1Extensions,gS1EPCISVersion,gS1EPCFormat,gS1CBVXMLFormat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the details of a subscription. This method is useful to verify if a subscription is still active.
 *
 * queryName QueryName The name of an EPCIS event query.
 * subscriptionID subscriptionID 
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * returns inline_response_201
 **/
exports.queriesQueryNameSubscriptionsSubscriptionIDGET = function(queryName,subscriptionID,gS1EPCISMin,gS1EPCISMax,gS1Extensions) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unsubscribes a client by deleting the query subscription.
 *
 * queryName QueryName The name of an EPCIS event query.
 * subscriptionID subscriptionID 
 * no response value expected for this operation
 **/
exports.unsubscribe = function(queryName,subscriptionID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


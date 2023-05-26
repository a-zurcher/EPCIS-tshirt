#!/bin/bash

curl -i \
  --request POST \
  --url http://localhost:8080/capture \
  --header 'Content-Type: application/json' \
  --data '{
  "@context": [
    "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld",
    {
      "example": "http://ns.example.com/epcis/"
    }
  ],
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "creationDate": "2023-05-23T11:30:47.0Z",
  "epcisBody": {
    "eventList": [
      {
        "eventID": "ni:///sha-256;df7bb3c352fef055578554f09f5e2aa41782150ced7bd0b8af24dd3ccb30ba69?ver=CBV2.0",
        "type": "ObjectEvent",
        "action": "OBSERVE",
        "bizStep": "receiving",
        "disposition": "in_transit",
        "epcList": [
          "urn:epc:id:sgtin:0614141.107346.2017",
          "urn:epc:id:sgtin:0614141.107346.2018"
        ],
        "eventTime": "2005-04-03T20:33:31.116000-06:00",
        "eventTimeZoneOffset": "-06:00",
        "readPoint": {
          "id": "urn:epc:id:sgln:0614141.07346.1234"
        },
        "bizTransactionList": [
          {
            "type": "po",
            "bizTransaction": "http://transaction.acme.com/po/12345678"
          }
        ]
      }
    ]
  }
}

'

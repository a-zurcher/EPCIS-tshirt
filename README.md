## 0. Contexte

![](/diagrammes/contexte.svg)

Dans ce POC nous prenons le role dans d'un logisticien d'un magasin d'habit (exemple: zara, h&m ...).

Nous recevons une livraison contenant un t-shirt.

Nous scannons la livraison et récupérons donc un message EPCIS.

Lors du scan, le message est envoyé au serveur et il est analysé.

On reçoit ensuite une réponse, si le message a pu être lu ou pas.

## 1. Quick Start

Pour lancer le serveur, exécutez :

```bash
npm start
```

Pour afficher l'interface Swagger UI :

```bash
open http://localhost:8080/docs
```
Faire une requête POST sur l'adress http://localhost:8080/capture
Copier le message du  point 3 dans le body de la requête 

Il est également possible d'exécuter le script `curl_request.sh` (depuis un terminal Bash) pour effectuer la requête POST, sans passer par un client lourd.

## 2. Technologies utilisées

![Swagger UI (Backend)](https://github.com/a-zurcher/swagger-epcis/assets/126246917/e2934ec9-0102-4495-a19b-ed362b578489)


## 3. Récupérer un fichier standardisé

Nous nous sommes inspiré de l'_object event_ mise en exemple sur le site https://gs1.org, disponible sur https://ref.gs1.org/docs/epcis/examples/object_event_all_possible_fields.jsonld

Voici notre évènement, à mettre dans le corps de la requête sur le serveur Swagger :

```json
{
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
        "disposition": "sellable_not_accessible",
        "epcList": [
          "urn:epc:id:sgtin:0614141.107346.2017"
        ],
        "eventTime": "2023-05-23T20:33:31.116000-02:00",
        "eventTimeZoneOffset": "+02:00",
        "readPoint": {
          "id": "urn:epc:id:sgln:0614141.07346.1234"
        },
        "bizTransactionList": [
          {
            "type": "po",
            "bizTransaction": "http://transaction.acme.com/po/12345678"
          }
        ],
        "destination": {
          "type":"location",
          "id": "urn:epc:id:sgln:0614141.07346.5678"
        },
        "source": {
          "type":"location",
          "id": "urn:epc:id:sgln:0614141.07346.1234"
        }
      }
    ]
  }
}
```
### Champs de l'évènement

#### `eventTime`

La date et l'heure de l'événement.

Dans notre cas, ce serait le moment où l'on reçoit le t-shirt du grossiste.

#### `eventTimeZoneOffset`

Le décalage horaire de l'événement par rapport à l'heure UTC.

Nous avons donc la valeur `+2`, car en Suisse nous utilisons UTC+2.

#### `epcList`

Une liste d'identifiants EPC (_Electronic Product Code_) représentant les objets liés à l'événement.

Un identifiant correspond à un t-shirt. Dans notre cas, ou nous recevons des t-shirts un par un, il n'y a qu'un seul identifiant dans cette liste.

#### `action`

L'action liée à l'événement, ici `OBSERVE`, car l'entité n'a pas été modifiée : elle n'a ni été créée, ajoutée, détruite ou retirée.

#### `bizStep`

L'étape commerciale liée à l'événement, ici `receiving` pour la réception de l'objet.

#### `disposition`

L'état ou la situation de l'objet, ici `sellable_not_accessible` indique qu'un t-shirt a été réceptionné dans l'entrepôt du magasin, c'est-à-dire qu'il est prêt à être vendu, mais pas (encore) accessible aux clients finaux.

#### `readPoint`

L'emplacement ou le point de lecture associé à l'événement. Dans notre cas, c'est le lieu de livraison (l'entrepôt du magasin). L'`id` est une référence unique qui utilise le même format que le champ [`destination`](#destination).

#### `bizTransactionList`

Une liste des transactions commerciales (_Purchase Order_, `po`). Dans notre cas vu que c'est une réception de marchandises, nous avons seulement la confirmation de commande.

#### `source`

Le lieu de départ, ici l'entrepôt du grossiste d'où provient les t-shirts.

On précise le type (location) pour indiquer que c'est un lieu physique.

#### `destination`

Le lieu de destination. Ici, c'est le lieu de livraison (notre entrepôt).

On précise le type (location) pour indiquer que c'est un lieu physique.

## 4. Fonctionnement du serveur

Utilise comme base la définition d'interface EPCIS `openapi.json`, téléchargeable sur https://ref.gs1.org/standards/epcis/artefacts.

Les fichiers du serveur Node.js sont ensuite générés avec l'outil https://editor.swagger.io.

La définition du point d'entrée qui nous intéresse (`POST` sur `/capture`) est spécifié à la ligne 389 du document `api/openapi.yaml`

![image](https://github.com/a-zurcher/swagger-epcis/assets/126246917/2dd40250-77c1-45f1-9bed-15127356afcb)

Faire une requête POST sur l'adress http://localhost:8080/capture
Copier le message du  point 3 dans le body de la requête 

Il est également possible d'exécuter le script `curl_request.sh` (depuis un terminal Bash) pour effectuer la requête POST, sans passer par un client lourd.

```
#!/bin/bash

curl -i \
  --request POST \
  --url http://localhost:8090/capture \
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
        "disposition": "livraison recu",
        "epcList": [
          "urn:epc:id:sgtin:0614141.107346.2017"
        ],
        "eventTime": "2023-05-23T20:33:31.116000-02:00",
        "eventTimeZoneOffset": "+02:00",
        "readPoint": {
          "id": "urn:epc:id:sgln:0614141.07346.1234"
        },
        "bizTransactionList": [
          {
            "type": "po",
            "bizTransaction": "http://transaction.acme.com/po/12345678"
          }
        ],
        "destination": {
          "id": "urn:epc:id:sgln:0614141.07346.5678"
        },
        "source": {
          "id": "urn:epc:id:sgln:0614141.07346.1234"
        }
      }
    ]
  }
}'

```


### Résultats
#### ➕ Positif

La requête du message EPCIS comme nous l'avons écris plus haut dans ce document nous retourne un code HTTP de 200, ce qui valide le succès de notre requête.

Ceci peut être testé en exécutant le script `curl_request.sh` sur un terminal Bash.

#### ➖ Négatif

Pour tester l'intégrité des champs standardisés, nous avons modifier la valeur du champs disposition ("`sellable_not_accessible`" à  "`livraison reçu`")

On remarque que l'on reçoit un message d'erreur dont un code 400 qui confirme cette erreur.

Le corps du message de retour contient l'erreur complète selon le standard EPCIS (voir fichier [`message_erreur.json`](/message_erreur.json).

## Technologies utilisées

![Swagger UI (Backend)](https://github.com/a-zurcher/swagger-epcis/assets/126246917/e2934ec9-0102-4495-a19b-ed362b578489)


## Récupérer un fichier standardisé

Nous nous sommes inspiré de l'_object event_ mise en exemple sur le site https://gs1.org, disponible sur https://ref.gs1.org/docs/epcis/examples/object_event_all_possible_fields.jsonld

### Message modifié
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
        "disposition": "container_open",
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
}
```
### Champs standards

#### `eventTime`

Indique la date et l'heure de l'événement.

Dans notre cas, ce serait le moment où l'on reçoit le t-shirt du grossiste.

#### `eventTimeZoneOffset`

Indique le décalage horaire de l'événement par rapport à l'heure UTC.

Nous avons donc la valeur `+2`, car en Suisse nous utilisons UTC+2.

#### `epcList`

Indique une liste d'identifiants EPC (_Electronic Product Code_) représentant les objets liés à l'événement.

Un identifiant correspond à un t-shirt. Dans notre cas, ou nous recevons des t-shirts un par un, il n'y a qu'un seul identifiant dans cette liste.

#### `action`

Indique l'action liée à l'événement, ici `OBSERVE` qui signifie une réception sur l'objet.

#### `bizStep`

Indique l'étape commerciale liée à l'événement, ici `receiving` pour la réception de l'objet.

#### `disposition`

Indique l'état ou la situation de l'objet, ici `in_stock` indique que l'objet est actuellement stocké et disponible dans le stock.

#### `readPoint`

Indique l'emplacement ou le point de lecture associé à l'événement. Dans notre cas, c'est le lieu de livraison (l'entrepôt du magasin). L'`id` est une référence unique qui utilise le même format que le champ [`destination`](#destination).

#### `bizTransactionList`

Indique une liste des transactions commerciales, dans notre cas vu que c'est une réception de marchandises, nous n'avons seulement la confirmation de commande (Purchase Order, po)

#### `source`

Spécifie le lieu de départ, le lieu de l'entrepôt du grossiste dans.

#### `destination`

Spécifie le lieu de destination. Dans notre cas, c'est le lieu de livraison (notre entrepôt). On remarque que c'est le même identifiant que celui spécifié au readpoint


## Générer les fichiers backend

Utilise comme base la définition d'interface EPCIS `openapi.json`, téléchargeable sur https://ref.gs1.org/standards/epcis/artefacts.

Les fichiers du serveur nodejs sont ensuite générés avec l'outil https://editor.swagger.io.

## Mise en place du service
```
npm start
```
Pour voir l'interface Swagger UI: 

```
open http://localhost:8080/docs
```

La définition du point d'entrée qui nous intéresse (`POST` sur `/capture`) est spécifié à la ligne 389 du document `api/openapi.yaml`

![image](https://github.com/a-zurcher/swagger-epcis/assets/126246917/2dd40250-77c1-45f1-9bed-15127356afcb)

## Event

Il est également possible de directement exécuter le script `curl_request.sh` (depuis un terminal Bash) pour effectuer la requête directement.

## Fonctionnement du serveur

Pour lancer le serveur, exécutez :

```bash
npm start
```

Pour afficher l'interface Swagger UI :

```bash
open http://localhost:8080/docs
```

Ce serveur a été généré par le projet [swagger-codegen](https://github.com/swagger-api/swagger-codegen). En utilisant le [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) à partir d'un serveur distant, vous pouvez facilement générer un stub de serveur.

Ce projet s'appuie sur [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware qui fait la plupart du travail.
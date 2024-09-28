## Descripción:

Queremos que cada vez que se añada una reunión en el calendario de Google, de forma automática, se envíe
un email a la persona con la que se quiere tener la reunión donde aparezca el link a la sala con la hora
definida. Además en el email deberá ir un texto predefinido y un asunto.

## Requisitos:

1. El evento se crea en el calendario de Google
   1.1 Únicamente se crea añadiendo el nombre del cliente y el día y hora de la reunión.

2. Una vez tengamos el nombre del cliente, tenemos que leer un fichero de Excel subido en el drive.
   2.1 En este Excel tendremos que buscar en la columna nombre el nombre del cliente para recuperar su email
   2.2 Para poder leer el excel es necesario saber el sheet_id que viene en la url del archivo entre /d/ y /edit/

- Ejemplo url
  `https://docs.google.com/spreadsheets/d/1uiiguyvuiuh98u98joijMz-xH6ZCac/edit?gid=0#gid=0`

3. Por último el email se envía desde fresDesk

## Resources:

- Api para enviar emails

* https://developers.freshdesk.com/api/#create_outbound_email

- Apis documentation:

* https://developers.freshworks.com/docs/app-sdk/v3.0/support_ticket/rest-apis/

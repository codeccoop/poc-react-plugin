# poc-react-plugin
Entorn de desenvolupament de plugins de react com packets de npm.
El **plugin** és una aplicació de react pensada per a ser consumida com un plugin a través del sistema de gestió de dependències de NPM.
El **consumer** és una aplicació de react pensada per a utilitzar el plugin com a dependència instal·lada com a packet NPM a través de la ordre `npm link --save poc-react-plugin`.

## Plugin
Initialize with `npm install`
Develop with `npm start`
Compile with `npm run build`

## Consumer
Initialize with `npm install`
Develop with `npm start`
Compile with `npm run build`

| :point_up:    | El plugin ha d'haver sigut compilat abans d'aixecar el consumer perqupe aquest pugui funcionar |
|---------------|:-----------------------------------------------------------------------------------------------|

## Keycloak
Start the server with `docker-cli start`

Haurem de configurar el servidor creant un *realm* al qual anomenarem 'somoffice', hi registrarem un usuari i crearem una entrada de client que li direm 'somoffice-shell' i el vincularem a la *root URL* `http://localhost:4000` on s'aixecarà el nostre servidor de desenvolupament de webpack. 

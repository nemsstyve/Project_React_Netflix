# Install json.server
npm i -D json-server json-server-auth
npm i -g json-server



# créer son login netflix

json-server --watch src/assets/db.json --port 3003 -m ./node_modules/json-server-auth
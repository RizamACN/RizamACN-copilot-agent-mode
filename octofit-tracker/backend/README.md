OctoFit Tracker backend — Run & Host

- Backend port: 8000

Run locally (development):

```bash
# install deps
npm install

# run dev server (uses ts-node ESM loader)
npm run dev
```

Seed local database (MongoDB on 127.0.0.1:27017):

```bash
npm run seed
```

Build and start (production):

```bash
npm run build
npm start
```

Codespaces preview URL

- When running in GitHub Codespaces with `CODESPACE_NAME` set, the API base URL will be:

```
https://$CODESPACE_NAME-8000.app.github.dev
```

API endpoints examples

```bash
curl http://127.0.0.1:8000/api/users
curl http://127.0.0.1:8000/api/activities
```

Notes

- The server listens on `0.0.0.0:8000` to support Codespaces and container networking.
- The seed script logs: "Seed the octofit_db database with test data" when run successfully.

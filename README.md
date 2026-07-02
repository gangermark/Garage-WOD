# Garage WOD

Installerbar PWA-version av Garage WOD Generator.

## Publicera på GitHub Pages

1. Ladda upp alla filer i detta projekt till repots rot.
2. Gå till **Settings → Pages**.
3. Välj **Deploy from a branch**.
4. Välj branch **main** och folder **/(root)**.
5. Öppna `https://gangermark.github.io/Garage-WOD/` i Safari.
6. På iPhone: **Dela → Lägg till på hemskärmen**.

## Filer

- `index.html` – appens HTML.
- `css/style.css` – all styling.
- `js/app.js` – WOD-generator, timer och PWA-registrering.
- `manifest.json` – PWA-manifest.
- `service-worker.js` – offline-cache.
- `assets/icons/` – appikoner.

## Uppdatera appen

När du ändrar filer, öka gärna `CACHE_NAME` i `service-worker.js`, t.ex. från `garage-wod-v2.0.0` till `garage-wod-v2.0.1`.

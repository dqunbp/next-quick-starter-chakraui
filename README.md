# NextJS starter

## Fully static NextJS app template with set of awersome libraries

## Includes

- [lingui.js](https://lingui.js.org/index.html)
- [react-query](https://react-query.tanstack.com/)
- [chakra-ui](https://chakra-ui.com/)
- [typescript](https://www.typescriptlang.org/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/#/)

## Features

- 🌏 &nbsp; i18n

  Supports route based i18n with lingui.js ❤️

- ✨ &nbsp; Effective api data managenemnt tool

  Used react-query to fetch and manage api data provides simple but powerfull set of features 💪

- 🌊 &nbsp; Next generation css

  Includes chakra-ui components which makes your app building fun and easy 🌟

- 📁 &nbsp; Optimized folders structure

  The folders structure changed to classic React progect manner, where `src/` includes all stuff

- 🪝 &nbsp; Pre-commit hooks

  Uses husky with lint-staged to prevent low-quality code leaking into the commits ☔

## Guides

### Get started

Install dependencies

```console
npm i
```

Compile messages and Run project

```console
npm run compile
```

```console
npm run dev
```

To run with [auto recompile i18n messages](####auto-recompile-locale-messages) use

```console
npm run dev:watchi18n
```

### i18n

#### Add new locale

To add new locale first update `.linguirc` config

```json
{
  "locales": ["en", "cs", "<add-your-locale-here>"],
  "sourceLocale": "en",
  "catalogs": [
    {
      "path": "src/locales/{locale}/messages",
      "include": ["src"]
    }
  ],
  "format": "po"
}
```

And then run `npm run extract` this will generate translation files in `locales/<new-locale>`

#### Auto recompile locale messages

This project supports authomatically recompile messages on `*.po` files changes to produce `messages.js` for each locale
Use `npm run dev:watchi18n` to achieve this

## TODO

- add tests template

# Circle Home Challenge

This challenge uses the Hey Linda project as a base: https://github.com/heylinda/heylinda-app and has only the purpose to test the app.

## Features Tested

- Meditate
- Track progress
- Time listened

## Prerequisites

**Detox**

- `yarn global add detox-cli`

For mac only

```
  brew tap wix/brew
  brew install applesimutils
```

**App**

- `yarn global add expo-cli`
- `yarn install`

**Allure Report**

`brew install allure`
For more information about how to configure Detox please refer: [Detox Oficial Page](https://wix.github.io/Detox/docs/introduction/getting-started)

## Before Running the Tests

- Please have an/a emulator/simulator installed and added to **_.detoxrc.js_**
- Make sure the for React-native is running while testing the app:

```
yarn react-native start
```

## How to Run

**iOS**

```

yarn test:e2e:ios

```

**Android**

```
yarn test:e2e:android

```

---

## 📝 **NOTE:** There is a open issue in Detox that currently only Android SDK < 32 are working! Please make sure to use an emulator that its SDK < 32 (e.g: SDK 31)

## Test Cases

Please check: [Test Cases](test-cases/doc.md)

## Improvements

- Detox automatically recorganazies the emulator/simulator

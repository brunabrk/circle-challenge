# Circle Home Challenge

This challenge uses the Hey Linda project as a base: https://github.com/heylinda/heylinda-app and has only the purpose to test the app.

## Features Tested

- Meditate
- Track progress
- Time listened

## Prerequisites

**Detox**

- `yarn global add detox-cli`

For mac only:

```
  brew tap wix/brew
  brew install applesimutils
```

**App**

- `yarn global add expo-cli`
- `yarn install`

## Before Running the Tests

- Please have an/a emulator/simulator installed and added to **_.detoxrc.js_**
- Create the iOS build using the following command:

```
npx expo prebuild --platform ios
```

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

## Test Cases

Please check: [Test Cases](test-cases/doc.md)

## Improvements

- Detox automatically recorganazies the emulator/simulator

---

## 📝 **NOTE:**

#### There is a open issue in Detox that currently only Android SDK < 32 are working! Please make sure to use an emulator that its SDK < 32 (e.g: SDK 31). See issue [Detox Issue](https://github.com/wix/Detox/issues/3762)

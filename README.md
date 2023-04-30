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

## How to Run

- Make sure the for React-native is running while testing the app:

```
yarn react-native start
```

**iOS**

```

yarn test:e2e:ios

```

**Android**

```
yarn test:e2e:android

```

---

## 📝 **NOTE:** There is a open issue in Detox that currently only Android SDK < 32 are working

## Test Cases

Please check: [Test Cases](test-cases/doc.md)

## Improvements

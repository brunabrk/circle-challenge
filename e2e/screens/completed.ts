import { element, by } from 'detox'

const completedScreen = () => {
  const elements = {
    skip: element(by.id('skip')),
  }

  return {
    elements,
  }
}

export { completedScreen }

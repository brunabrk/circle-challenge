# Test Cases

This document contains test cases of the core HeyLinda app features such as meditation, track progress, and time listened.

### Meditate

- Successfully play a meditation
- Successfully download a meditation
- Favorite a meditation
- Forward by 10s a meditation audio
- Backword by 10s a meditation audio
- A meditation on the home screen contains a title, subtitle, and time
- The meditation home should be divided among: Popular, anxiety and sleep

### Track Progress

- Manually create a meditation progress
- Current streak on the stats screen should update accordantly to the number of meditation days (doesn't include the manual meditation input)
- Total sessions on the stats screen should update accordantly to the number of meditation sessions

### Time Listened

- Time listened on the stats screen should update accordantly to the time spent on meditation no matter the type of them

## Non-Functional Testing

#### Performance

Since the application may have users with different internet connection speed it would be good to have a test that simulates a very slow internet connection, e.g. Edge.

## Questions

1. When the current streak should change? Currently, it's not changing when the user manually enters the meditation.

# Test Cases

This document contains test cases of the core HeyLinda app features such as meditation, tracking progress, and time listened.

## Meditate

- Successfully play a meditation
- Successfully download a meditation
- Add a meditation as favorite
- Forward by 10s a meditation audio
- Backward by 10s a meditation audio
- A meditation on the home screen contains a title, subtitle, and time
- The meditation home should be divided among Popular, anxiety, and sleep

## Track Progress

- Manually record a meditation progress
- Manually record an invalid character on the meditation progress
- Current streak on the stats screen should update accordingly to the number of meditation days (doesn't include the manual meditation input)
- Total sessions on the stats screen should update accordingly to the number of meditation sessions

## Time Listened

- Time listened on the stats screen should update accordingly to the time spent on meditation no matter the type of them

## Non-Functional Testing

#### Performance

Since the application may have users with different internet connection speeds it would be good to have a test that simulates slow internet connection, e.g. Edge. 3G.

## Questions

1. When the current streak should change? Currently, it's not changing when the user manually enters the meditation.

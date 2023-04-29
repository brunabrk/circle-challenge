import * as React from 'react'
import { StyleSheet } from 'react-native'

import PlayerIcon from '../PlayerIcon'
import { View, Text } from '../../../components/Themed'

interface Props {
  positionTime: string
  durationTime: string
  isPlaying: boolean
  pause: () => void
  play: () => void
  replay: () => void
  forward: () => void
}
export default function PlayerControls({
  positionTime,
  durationTime,
  isPlaying,
  pause,
  play,
  replay,
  forward,
}: Props) {
  return (
    <View style={styles.controls}>
      <Text>{positionTime}</Text>
      <PlayerIcon name="replay-10" onPress={replay} size={30} testID="replay-10" />
      {isPlaying ? (
        <PlayerIcon name="pause-circle-filled" onPress={pause} testID="pause-circle" />
      ) : (
        <PlayerIcon name="play-circle-filled" onPress={play} testID="play-circle" />
      )}
      <PlayerIcon name="forward-10" onPress={forward} size={30} testID="forward-10" />
      <Text>{durationTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

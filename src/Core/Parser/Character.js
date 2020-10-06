import { ApiParser } from './Api'

export const CharacterParser = {
  character ({
    comics: { available: comicsCount = 0 } = {},
    series: { available: seriesCount = 0 } = {},
    stories: { available: storiesCount = 0 } = {},
    events: { available: eventsCount = 0 } = {},
    ...other
  }) {
    return {
      ...ApiParser.baseData(other),
      summary: {
        comicsCount,
        seriesCount,
        storiesCount,
        eventsCount
      }
    }
  },
  list (results = []) {
    return results.map(CharacterParser.character)
  }
}

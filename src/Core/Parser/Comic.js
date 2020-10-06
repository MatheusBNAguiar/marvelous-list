import { ApiParser } from './Api'

export const ComicParser = {
  card ({
    title,
    characters: { available: characterCount } = {},
    stories: { available: storyCount } = {},
    pageCount,
    ...rest
  }) {
    return {
      ...ApiParser.baseData(rest),
      name: title,
      summary: {
        characterCount,
        storyCount,
        pageCount
      }
    }
  },
  list (results = []) {
    return results.map(ComicParser.card)
  }
}

export const CharacterParser = {
  card ({
    id, name,
    thumbnail: { path, extension } = {},
    comics: { available: comicsCount = 0 } = {},
    series: { available: seriesCount = 0 } = {},
    stories: { available: storiesCount = 0 } = {},
    stories: { available: eventsCount = 0 } = {}
  }) {
    const image = path && extension ? `${path}.${extension}` : ''
    const imageIsNotAvailable = image.indexOf('image_not_available') !== -1

    return {
      id,
      name,
      image,
      imageIsNotAvailable,
      comicsCount,
      seriesCount,
      storiesCount,
      eventsCount
    }
  },
  list (results = []) {
    return results.map(CharacterParser.card)
  }
}

export const ComicParser = {
  card ({
    id,
    title,
    thumbnail: { path, extension } = {},
    characters: { available: characterCount } = {},
    stories: { available: storyCount } = {},
    pageCount,
    description
  }) {
    const image = path && extension ? `${path}.${extension}` : ''
    const imageIsNotAvailable = image.indexOf('image_not_available') !== -1

    return {
      id,
      name: title,
      image,
      imageIsNotAvailable,
      description: description || '',
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

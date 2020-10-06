export const ApiParser = {
  baseData ({
    id,
    name,
    description = '',
    thumbnail = {}
  }) {
    const { path, extension } = thumbnail || {}
    const image = path && extension ? `${path}.${extension}` : ''
    const imageIsNotAvailable = image.indexOf('image_not_available') !== -1

    return ({
      id,
      name,
      image,
      description,
      imageIsNotAvailable
    })
  },
  baseList (results = []) {
    return results.map(ApiParser.baseData)
  },
  paginatedContent (resultsParser = x => x) {
    return (apiData = {}) => {
      const { offset, limit, total, count, results } = apiData
      return {
        meta: { offset, limit, total, count, pages: Math.ceil(total / (limit || 1)) },
        results: resultsParser(results)
      }
    }
  }
}

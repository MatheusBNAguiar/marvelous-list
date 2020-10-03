export const ApiParser = {
  paginatedContent (resultsParser = x => x) {
    return (apiData = {}) => {
      const { offset, limit, total, count, results } = apiData
      return {
        meta: { offset, limit, total, count },
        results: resultsParser(results)
      }
    }
  }
}

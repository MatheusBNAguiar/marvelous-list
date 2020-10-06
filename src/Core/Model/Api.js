export const ApiModel = {
  meta ({ page = 1, paginationQuantity = 0 }) {
    return {
      limit: paginationQuantity,
      offset: (page - 1) * paginationQuantity
    }
  }
}

export const ApiModel = {
  meta ({ page, paginationQuantity }) {
    return {
      limit: paginationQuantity,
      offset: (page - 1) * paginationQuantity
    }
  }
}

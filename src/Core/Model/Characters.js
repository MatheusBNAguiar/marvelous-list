export const CharacterModel = {
  meta ({ page, paginationQuantity, characterStartsWith }) {
    return {
      limit: paginationQuantity,
      offset: (page - 1) * paginationQuantity,
      nameStartsWith: characterStartsWith || undefined
    }
  }
}

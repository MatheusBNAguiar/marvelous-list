import { marvelApi } from 'Core/External/MarvelApi'
import { ApiParser } from 'Core/Parser/Api'

export const CharactersService = {
  listCharacters () {
    return marvelApi.get('/characters').then(ApiParser.paginatedContent())
  }
}

import { marvelApi } from 'Core/External/MarvelApi'
import { ApiModel } from 'Core/Model/Api'
import { ApiParser } from 'Core/Parser/Api'
import { CharacterParser } from 'Core/Parser/Character'

export const CharactersService = {
  listCharacters (meta) {
    return marvelApi.get('/characters', { params: ApiModel.meta(meta) }).then(ApiParser.paginatedContent(CharacterParser.list))
  }
}

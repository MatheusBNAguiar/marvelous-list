import { marvelApi } from 'Core/External/MarvelApi'
import { CharacterModel } from 'Core/Model/Characters'
import { ApiParser } from 'Core/Parser/Api'
import { CharacterParser } from 'Core/Parser/Character'

export const CharactersService = {
  listCharacters (meta) {
    return marvelApi.get('/characters', { params: CharacterModel.meta(meta) }).then(ApiParser.paginatedContent(CharacterParser.list))
  }
}

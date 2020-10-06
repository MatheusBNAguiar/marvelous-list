import { marvelApi } from 'Core/External/MarvelApi'
import { ApiModel } from 'Core/Model/Api'
import { ApiParser } from 'Core/Parser/Api'
import { CharacterParser } from 'Core/Parser/Character'
import { ComicParser } from 'Core/Parser/Comic'

export const ComicsService = {
  listComics (meta) {
    return marvelApi.get('/comics', { params: ApiModel.meta(meta) }).then(ApiParser.paginatedContent(ComicParser.list))
  },
  listComicCharacters (comicId, meta) {
    return marvelApi.get(`/comics/${comicId}/characters`, { params: ApiModel.meta(meta) }).then(ApiParser.paginatedContent(CharacterParser.list))
  }
}

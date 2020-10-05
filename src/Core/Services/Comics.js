import { marvelApi } from 'Core/External/MarvelApi'
import { ApiModel } from 'Core/Model/Api'
import { ApiParser } from 'Core/Parser/Api'
import { ComicParser } from 'Core/Parser/Comic'

export const ComicsService = {
  listComics (meta) {
    return marvelApi.get('/comics', { params: ApiModel.meta(meta) }).then(ApiParser.paginatedContent(ComicParser.list))
  }
}

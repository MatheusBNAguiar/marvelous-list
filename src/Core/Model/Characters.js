import { ApiModel } from './Api'

export const CharacterModel = {
  meta ({ characterStartsWith, ...rest }) {
    return {
      ...ApiModel.meta(rest),
      nameStartsWith: characterStartsWith || undefined
    }
  }
}

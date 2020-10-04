import { Layout } from 'Components/Layout/Layout'
import { Characters } from 'Domain/Characters/Characters'
import { FavoriteCharacters } from 'Domain/Characters/FavoriteCharacters'

export const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: 'characters',
        component: Characters
      },
      {
        path: 'favorites',
        component: FavoriteCharacters
      }
    ]
  }
]

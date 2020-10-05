import { Layout } from 'Components/Layout/Layout'
import { Characters } from 'Domain/Characters/Characters'
import { FavoriteCharacters } from 'Domain/Characters/FavoriteCharacters'
import { Comics } from 'Domain/Comics/Comics'
import { Home } from 'Domain/Home/Home'

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
      },
      {
        path: 'comics',
        component: Comics
      },
      {
        path: '/',
        component: Home
      },
      {
        path: '',
        redirect: true
      }
    ]
  }
]

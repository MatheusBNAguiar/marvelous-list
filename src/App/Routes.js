import { Layout } from 'Components/Layout/Layout'
import { Characters } from 'Domain/Characters/Characters'

export const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: 'characters',
        component: Characters
      }
    ]
  }
]

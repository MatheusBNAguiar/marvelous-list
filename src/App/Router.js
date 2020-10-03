import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

const RouteBuilder = ({
  redirect = false,
  path: mainPath,
  component: MainComponent,
  routes = [],
  exact = false
}) => {
  if (redirect) {
    return (<Redirect to={`${mainPath}`} />)
  }
  if (routes.length) {
    return (
      <Route path={mainPath} exact={exact}>
        <MainComponent>
          <Switch>
            {
              routes.map(
                ({ path, component, routes = [], exact = false, redirect = false }) => {
                  if (redirect) {
                    return (
                      <Redirect
                        to={`${mainPath}${path}`}
                        key={`${mainPath}${path}`}
                      />
                    )
                  }
                  return (
                    <RouteBuilder
                      key={path}
                      redirect={redirect}
                      component={component}
                      routes={routes}
                      path={`${mainPath}${path}`}
                      exact={exact}
                    />
                  )
                }
              )
            }
          </Switch>
        </MainComponent>
      </Route>
    )
  }
  return (
    <Route path={mainPath} component={MainComponent} exact={exact} />
  )
}

export const Router = ({ routes = [] }) => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(
            ({ path, component, routes = [], exact = false, redirect = false }) => {
              if (redirect) {
                return (<Redirect key={`redirect-${path}`} to={path} />)
              }
              return (
                <RouteBuilder
                  redirect={redirect}
                  key={path}
                  component={component}
                  routes={routes}
                  path={path}
                  exact={exact}
                />
              )
            }
          )
        }
      </Switch>
    </BrowserRouter>
  )
}

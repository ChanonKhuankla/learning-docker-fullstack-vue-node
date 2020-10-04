import { Middleware } from '@nuxt/types'

const testMiddleware: Middleware = ({ app }) => {
  if (app.$fireAuth) {
    console.log('test middle ware',app.$fireAuth);
    
    // INFO -> Firebase Services can be accessed with app.$fireAuth (etc.) in Middleware.
  }
}

export default testMiddleware

'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User')

Route.post('/register', async ({ request, response }) => {
  const userData = request.only(['email', 'username', 'password'])
  const user = await User.create(userData)
  return { user }
})

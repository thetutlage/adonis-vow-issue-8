'use strict'

const { test, trait } = use('Test/Suite')('Example')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('can register a new user', async ({ client }) => {
  const newUser = {
    username: 'virk',
    email: 'foo@bar.com',
    password: 'foobar'
  }

  const response = await client
    .post('/register')
    .send(newUser)
    .end()

  response.assertStatus(200) // fails here with a 500 status
  response.assertJSONSubset({ user: {
    username: newUser.username,
    email: newUser.email
  } })
})

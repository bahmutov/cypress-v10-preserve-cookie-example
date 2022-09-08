// if you want to delete all users, uncomment this hook
// before(() => {
//   cy.task('clearUsers')
// })

it('Creates user if needed', () => {
  const username = 'aTestUser'
  const password = '!!passW0rd'

  cy.visit('/')
  cy.get('.login-form')
    .within(() => {
      cy.get('[name=username]').type(username)
      cy.get('[name=password]').type(password, { log: false })
    })
    .submit()
  // you should see an error "Incorrect username"
  cy.contains('.message.error', 'Incorrect username', {
    timeout: 1000,
  })
  // TODO: finish the test
  // if the test sees this error,
  //  it needs to create the user first and attempt to log in again
  //  the app should be at the registration form
  //  where we can enter the name and the password
  //  and create the user
  //  The app should show "Your account has been created"
  //  and then we can log in again
  // else
  //  we are good to go, we have successfully logged in
  // finally
  //  we are redirected to the /rooms page
})

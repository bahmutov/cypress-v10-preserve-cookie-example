// @ts-check

import { loginUser } from './utils'

// watch the video "Stay Logged In During Tests By Preserving A Cookie"
// https://youtu.be/tXqX2SQurMc

describe('log in once', () => {
  // create this user yourself before running this spec
  const username = 'gleb1'
  const password = '123456'

  before(() => {
    console.log('before')
    loginUser(username, password)
  })

  beforeEach(() => {
    console.log('beforeEach')
    cy.getCookie('connect.sid').then(console.log)
    Cypress.Cookies.preserveOnce('connect.sid')
    console.log('beforeEach done')
  })

  it('is logged in (1st test)', function () {
    console.log('first test')
    cy.visit('/')
    cy.location('pathname').should('equal', '/rooms')
    cy.contains('.user-info', username)
  })

  it('stays logged in (2nd test)', function () {
    cy.visit('/')
    cy.location('pathname').should('equal', '/rooms')
    cy.contains('.user-info', username)
  })

  it('stays logged in (3rd test)', function () {
    cy.visit('/')
    cy.location('pathname').should('equal', '/rooms')
    cy.contains('.user-info', username)
  })
})

/// <reference types="cypress-v10-preserve-cookie" />
// @ts-check
import 'cypress-v10-preserve-cookie'
import { loginUser } from './utils'

// watch the video "Stay Logged In During Tests By Preserving A Cookie"
// https://youtu.be/tXqX2SQurMc

describe('log in once', () => {
  // create this user yourself before running this spec
  const username = 'gleb1'
  const password = '123456'

  before(() => {
    loginUser(username, password)
  })

  beforeEach(() => {
    cy.preserveCookieOnce('connect.sid')
  })

  it('is logged in (1st test)', function () {
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

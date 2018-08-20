/* eslint-env mocha */

'use strict'

const CbQ = require('../')
const assert = require('assert')

describe('basic functionality', () => {
  it('supports counting', () => {
    const q = new CbQ()

    q.push('foo')
    q.push('foo')

    assert.equal(q.cnt('foo'), 2)
  })

  it('triggers errors for queued functions', (done) => {
    const q = new CbQ()

    q.push('foo', () => {})
    q.push('foo', (err) => {
      if (err) done()
    })

    q.trigger('foo', new Error('foo error'))
  })

  it('triggers errors for first queued function', (done) => {
    const q = new CbQ()

    q.push('foo', (err) => {
      if (err) done()
    })

    q.trigger('foo', new Error('foo error'))
  })
})

'use strict'

const CbQ = require('../')
const test = require('brittle')

test('supports counting', (t) => {
  const q = new CbQ()

  q.push('foo')
  q.push('foo')

  t.is(q.cnt('foo'), 2)
})

test('triggers errors for queued functions', (t) => {
  t.plan(1)

  const q = new CbQ()

  q.push('foo', () => {})
  q.push('foo', (err) => {
    t.ok(err)
  })

  q.trigger('foo', new Error('foo error'))
})

test('triggers errors for first queued function', (t) => {
  t.plan(1)

  const q = new CbQ()

  q.push('foo', (err) => {
    t.ok(err)
  })

  q.trigger('foo', new Error('foo error'))
})

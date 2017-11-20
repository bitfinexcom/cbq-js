# cbq-js

A simple callback based queue in JS

## API

### Class: CbQ

#### new CbQ()

Creates new queue.

#### push(key, function)

Pushes the function under the given key on the queue.

#### trigger(key, err, res)

Calls functions on the queue with `err` and `res`

#### cnt(key)

Returns the length of a queue.

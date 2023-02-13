# Bingo Timestamp

This repository contains a Javascript project that generates arrays of numbers based on a timestamp seed. The project is designed to generate numbers for a bingo game and was inspired by the need for a random number generator in bingo.

The random-seed library is used to generate the numbers to ensure that the output is both random and deterministic.

## Installation

```sh
# npm
npm install bingo-timestamp

# yarn
npm install bingo-timestamp
```

## Usage

```js
import { randomList } from 'bingo-timestamp'

const numbers = randomList({seed: Date.now(), size: 10})

console.log(numbers) // [6, 2, 1, 4, 9, 10, 7, 8, 3, 5]
```

## API

`randomList(options)`
Generates an array of numbers based on a timestamp or number seed.

### Options

- `seed`: the seed to use for generating the numbers (default: current timestamp)
- `size`: the size of the array to generate (default: 24)

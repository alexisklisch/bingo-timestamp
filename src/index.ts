import Rand from 'random-seed'

export const randomList = ({ seed = Date.now, size = 24 }) => {
  const list: number[] = []
  let currentSeed = Number(seed)

  while (list.length <= size - 1) {
    const num = new Rand(currentSeed).random() * size
    const integer = Math.round(num)

    if (list.includes(integer) || integer === 0) {
      currentSeed++
      continue
    }

    list.push(integer)
  }
  return list
}

export default randomList

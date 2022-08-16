export interface Person {
  name: string
  surname: string
  age: number
}

const persons: Person[] = [
  {
    name: 'Anna',
    surname: 'Prvá',
    age: 30
  },
  {
    name: 'Boris',
    surname: 'Druhý',
    age: 40
  },
  {
    name: 'Cecil',
    surname: 'Tretí',
    age: 42
  }
]

export function createPerson(index: number): Person {
  return { ...persons[index] };
}

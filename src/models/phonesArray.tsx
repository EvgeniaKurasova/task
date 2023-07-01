interface Phone {
  id: number
  title: string
  description: string
  price: number
}
const phonesArray: Phone[] = [
  {
    id: 1,
    title: 'iPhone 12',
    description: 'This is iPhone 12',
    price: 750
  },
  {
    id: 2,
    title: 'iPhone 8',
    description: 'This is iPhone 8',
    price: 650
  },
  {
    id: 3,
    title: 'iPhone X',
    description: 'This is iPhone X',
    price: 1250
  }
]

export default phonesArray

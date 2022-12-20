export interface CartItem {
    id: number,
    title: string,
    price: number,
    img: string,
    amount: number,
}
const cartItems:CartItem[] = [
    {
        id: 1,
        title: 'White T Oversized',
        price: 59.99,
        img: '/image1.png',
        amount: 2,
    },
    {
        id: 2,
        title: 'Black Tom & Jerry shirt',
        price: 59.99,
        img: '/image2.png',
        amount: 2,
    },
    {
        id: 3,
        title: 'Rick And Morty shirt',
        price: 59.99,
        img: '/image3.png',
        amount: 2,
    },
    {
        id: 4,
        title: 'Ferxxo Collection',
        price: 59.99,
        img: '/image4.png',
        amount: 3
    },
    {
        id: 5,
        title: 'Ferxxo Oversized',
        price: 59.99,
        img: '/image5.png',
        amount: 1,
    }
]

export default cartItems
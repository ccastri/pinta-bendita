export interface CartItem {
    id: number,
    title: string,
    price: number,
    image: string,
    
}
export interface CartItem2 extends  CartItem {
    amount: number,
}

// const cartItems:CartItem2[] = [
    // {
    //     id: 1,
    //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    //     price: 59.99,
    //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    //     amount: 2,
        
    // },
    // {
    //     id: 2,
    //     title: 'Black Tom & Jerry shirt',
    //     price: 59.99,
    //     image: '/image2.png',
    //     amount: 2,
    // },
    // {
    //     id: 3,
    //     title: 'Rick And Morty shirt',
    //     price: 59.99,
    //     image: '/image3.png',
    //     amount: 2,
    // },
    // {
    //     id: 4,
    //     title: 'Ferxxo Collection',
    //     price: 59.99,
    //     image: '/image4.png',
    //     amount: 3
    // },
    // {
    //     id: 5,
    //     title: 'Ferxxo Oversized',
    //     price: 59.99,
    //     image: '/image5.png',
    //     amount: 1,
    // }
    
// ]

// export default cartItems
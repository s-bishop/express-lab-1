interface CartItem {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

let cart: CartItem[] = [
    {
        id: 1,
    product: "iPhone",
    price: 1000,
    quantity: 1
    },
    {
        id: 2,
    product: "Apple Watch",
    price: 700,
    quantity: 1
    },
    {
        id: 3,
    product: "MacBook Air",
    price: 1000,
    quantity: 1
    },
    {
        id: 4,
    product: "Airpod pros",
    price: 280,
    quantity: 1
    },
    {
        id: 5,
    product: "Apple Cinema Display",
    price: 600,
    quantity: 1
    },
    
];

export default cart;

export {CartItem};
export type menuItemType = { 
    id: number;
    name: string;
    price: number;
}

export type OrderItemType = menuItemType & {
    quantity: number;
}

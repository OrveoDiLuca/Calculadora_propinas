import { useState } from "react"
import type { menuItemType, OrderItemType } from "../types"

export default function useOrder() {
    
    const [order,setOrder] = useState<OrderItemType[]>([])

    const addOrderItem = (item: menuItemType) => {
        const itemInOrder = order.find((orderItem) => orderItem.id === item.id) 
        if(itemInOrder){
            const newItem = {...item, quantity: itemInOrder.quantity + 1}
            setOrder(order.map((orderItem) => orderItem.id === item.id ? newItem : orderItem))
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order,newItem])
        }
        
    }

    return {
        addOrderItem, 
        order
    }
}
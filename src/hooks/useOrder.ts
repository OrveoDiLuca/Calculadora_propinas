import { useState } from "react"
import type { menuItemType, OrderItemType } from "../types"

export default function useOrder() {
    
    const [order,setOrder] = useState<OrderItemType[]>([])
    const [tip,setTip] = useState(0)

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

    const removeOrderItem = (id : menuItemType['id']) => {
        setOrder(order.filter((orderItem) => orderItem.id !== id))
    }

    const placeOrder = () =>{
        setOrder([])
        setTip(0)
    }

    return {
        addOrderItem, 
        order, 
        removeOrderItem,
        setTip,
        tip,
        placeOrder
    }
}
import { useMemo } from "react"
import type { OrderItemType } from "../types"

type OrderTotalProps = {
    order: OrderItemType[],
    tip: number, 
    placeOrder: () => void
}

function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
    const subtotal = useMemo(() => {
        return order.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
    }, [order])
    
    const tipAmount = useMemo(() => {
        return subtotal * tip
    }, [order, tip])

    const total = useMemo(() => {
        return subtotal + tipAmount
    }, [order, tip])

    return (
        <>
            <div className="space-y-5">
                <h2 className="font-black text-2xl"> Totales y Propinas: </h2>
                <p>Subtotal a pagar:
                    <span className="font-bold"> ${subtotal}</span>
                </p>

                <p>Propina:
                    <span className="font-bold"> ${tipAmount}</span>
                </p>

                <p>Total a pagar:
                    <span className="font-bold"> ${total}</span>
                </p>
            </div>
            <button 
            className="w-full bg-black p-3 uppercase font-bold text-white rounded-lg hover:bg-gray-900 cursor-pointer disabled:opacity-10"
            disabled = {total === 0}
            onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotal
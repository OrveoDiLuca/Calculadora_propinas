import { useMemo } from "react"
import type { OrderItemType } from "../types"

type OrderTotalProps = {
    order: OrderItemType[],
    tip: number
}

function OrderTotal({ order, tip }: OrderTotalProps) {
    const subtotal = useMemo(() => {
        return order.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
    }, [order])
    
    const tipAmount = useMemo(() => {
        return subtotal * tip
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
                    <span className="font-bold"> $0</span>
                </p>
            </div>
            <button>

            </button>
        </>
    )
}

export default OrderTotal
import type { OrderItemType } from "../types"

type OrderContetsProps = {
    order: OrderItemType[]
}

const OrderContets = ({order}: OrderContetsProps) => {
  return (
    <div> 
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ? (
                <p className="text-center">No hay items en el consumo</p>
            ) : (
            order.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                </div>
            )))}

        </div>
    </div>
  )
}

export default OrderContets
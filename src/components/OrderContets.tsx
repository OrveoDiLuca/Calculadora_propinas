import type { OrderItemType, menuItemType } from "../types"

type OrderContetsProps = {
    order: OrderItemType[]
    removeOrderItem: (id: menuItemType['id']) => void
}

const OrderContets = ({ order, removeOrderItem }: OrderContetsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-10">
                {order.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-t border-slate-300 last-of-type:border-b py-5"
                        >
                            <div>
                                <p className="text-lg">
                                    {item.name} - ${item.price}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - ${item.price * item.quantity}
                                </p>
                            </div>
                            <button 
                                onClick={() => removeOrderItem(item.id)}
                                className="bg-red-500 text-white h-8 w-8 flex items-center justify-center rounded-full hover:cursor-pointer">
                                X
                            </button>
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default OrderContets
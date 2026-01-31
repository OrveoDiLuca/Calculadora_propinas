import type {menuItemType} from "../types"

type MenuItemProps = {
    item: menuItemType
    addOrderItem: (item: menuItemType) => void 
}

export const MenuItem = ({item, addOrderItem}: MenuItemProps) => {
    const {name, price} = item
    return (
        <button 
        onClick={() => addOrderItem(item)} 
        className="border-2 border-teal-300 hover:bg-teal-200 cursor-pointer w-full p-2 flex justify-between mb-5">
            <p>{name}</p>
            <p className="text-xl font-bold">${price}</p>
        </button>
    )
}

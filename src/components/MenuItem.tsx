import type {menuItemType} from "../types"

type MenuItemProps = {
    item: menuItemType
}

export const MenuItem = ({item}: MenuItemProps) => {
    const {name, price} = item
    return (
        <button className="border-2 border-teal-300 hover:bg-teal-200 w-full p-2 flex justify-between mb-5">
            <p>{name}</p>
            <p className="text-xl font-bold">${price}</p>
        </button>
    )
}

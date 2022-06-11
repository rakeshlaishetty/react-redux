import { Add_To_Cart, Remove_To_Cart } from "../Constants"
export const AddToCart = (data) => {
    return{
        type:Add_To_Cart,
        data
    }
}

export const RemoveToCart = () => {
    return{
        type:Remove_To_Cart,
        data
    }
}
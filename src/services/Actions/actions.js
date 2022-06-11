import { Add_To_Cart } from "../Constants"
export const AddToCart = (data) => {
    return{
        type:Add_To_Cart,
        data:data
    }
}

import { connect, useDispatch } from "react-redux";
import Home from "../components/Home";
import {AddToCart} from "../services/Actions/actions"

const mapToStateProps = state => ({

});
const mapDispatchToProps = useDispatch => ( {
    AddToCartHandler: data => useDispatch(AddToCart(data))
} )
export default connect(mapToStateProps,mapDispatchToProps)(Home);
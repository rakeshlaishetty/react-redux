import { connect } from "react-redux";
import Home from "../components/Home";
import {AddToCart} from "../services/Actions/actions"

const mapToStateProps = state => ({

});
const mapDispatchToProps = dispatch => {
    AddToCartHandler:data=>dispatch(AddToCart)
} 
export default connect(mapToStateProps,mapDispatchToProps)(Home);
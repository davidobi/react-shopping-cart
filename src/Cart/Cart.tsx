import { Wrapper } from "../assets/styles/Cart.styles";
import CartItem from "../CartItem/CartItem";
//Types
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            { cartItems.length === 0 ? <p>No items in Cart</p> : null }
            { cartItems.map(item => (
                <CartItem />
            ))}
        </Wrapper>
    )
}

export default Cart;
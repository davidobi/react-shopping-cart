import { Button } from "@material-ui/core";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "../assets/styles/Item.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <div>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </Wrapper>
)

export default Item;
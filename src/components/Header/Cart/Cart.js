import css from "./Cart.module.css";
import { BsCart3 } from 'react-icons/bs';

const Cart = () => {
    return (
        <div className={css.cart_wrap}>
            <BsCart3 size={20} style={{ padding: 5 }} />
            <a className={css.cart_link} href="./#">Корзина</a>
            </div>
    )
}

export default Cart;
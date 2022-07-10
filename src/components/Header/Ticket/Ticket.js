import css from "./Ticket.module.css";
import { TbTicket } from 'react-icons/tb';

const Ticket = () => {
    return (
        <div className={css.cart_wrap}>
            <TbTicket size={20} style={{ padding: 5 }} />
            <a className={css.cart_link} href="./#">Забронировать</a>
            </div>
    )
}

export default Ticket;
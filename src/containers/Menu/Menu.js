import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "../../components/MenuItem/MenuItem";
import './Menu.css';
import {fetchMenu} from "../../store/actions/menuActions";
import {addItem} from "../../store/actions/cartActions";

const Menu = () => {
    const menu = useSelector(state => state.menu.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    const addItemHandler = name => dispatch(addItem(name));

    const menuList = menu.map(item => {
        return (
        <MenuItem
            key={item.name}
            image={item.url}
            price={item.price}
            name={item.name}
            click={() => addItemHandler(item.name)}
        />
        )
    });

    return (
        <div className="menu">
            {menuList}
        </div>
    );
};

export default Menu;
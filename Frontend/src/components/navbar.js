import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {

/* const [active, setactive]=useState(styles.nonActive)

 const styles = {
    active: {
        backgroundColor: 'white',
    },
    nonActive: {
      backgroundColor: 'gray',  
    },

} */

    return (
        <aside>
            <ul>
                <li>
                <NavLink to='/findfood'>Find Food</NavLink>
                </li>
                <li>
                <NavLink to='/seefood'>See Food</NavLink>
                </li>
                <li>
                    <NavLink to='/addfood'>Add Food</NavLink>
                </li>

            </ul>

        </aside>

    )

}

export default Navbar;
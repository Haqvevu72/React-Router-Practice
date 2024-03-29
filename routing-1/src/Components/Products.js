import React from 'react'
import { Link , Outlet} from 'react-router-dom';

export const Products = () => {
    return (
        <> 
            <div>
                <input type = 'search' placeholder = "='Search Products"></input>
            </div>
            <nav>
                {/* Asagidaki Linkler `Relative Link` adlanir */}
                {/* Cunki gorduyunuz kimi `/` isharesi istifade edilmiyib */}
                {/* Onlarin Path-i Parent-in pathine gore formalasir */}
                <Link to = 'featured'>Featured</Link>
                <Link to = 'new'>New</Link>
            </nav>
            <Outlet/>
        </>
    );
}
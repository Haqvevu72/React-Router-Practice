import React from 'react';
import { Outlet , Link , useSearchParams} from 'react-router-dom';

export const Users = () => {

    const [ searchParams , setSearchParams ] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div className = 'users'>
            <Link to = '/users/1'>User 1</Link>
            <Link to = '/users/2'>User 2</Link>
            <Link to = '/users/3'>User 3</Link>
            <Outlet/>
            <div>
                <button onClick = { () => setSearchParams ( { filter : 'active' } ) }>
                    Active Users
                </button>
                <button onClick = { () => setSearchParams( {} ) }>
                    Reset Users
                </button>
            </div>
            {
                showActiveUsers ? ( <h1>Active Users</h1> ) : ( <h1>All Users</h1> )
            }
        </div>
        

    );
};


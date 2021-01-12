import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

export default function UserDetails () {
    return (
        <div>UserDetails


            <Switch>

                 <Route path="/users/usersVeryDetailed">
                    <div>This is detailed users</div>
                </Route>

                <Route path="/users">
                    <div>This is basic users</div>
                </Route>
            </Switch>
            <Link to="/users/usersVeryDetailed">To detailed User</Link>
        </div>

    )
}
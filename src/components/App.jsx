import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import EmployeeLogin from './EmployeeLogin';
import TapList from './TapList';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/tap-list' component={TapList} />
                <Route path='/login' component={EmployeeLogin} />
            </Switch>
        </div>
    );
}

export default App;
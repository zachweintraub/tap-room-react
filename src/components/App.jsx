import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import EmployeeLogin from './EmployeeLogin';
import TapList from './TapList';

function App() {
    return (
        <div>
            <style jsx global>{`
                body {
                    background: black;
                    color: white;
                }
            `}</style>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/tap-list' component={TapList} isAdmin false />
                <Route path='/login' component={EmployeeLogin} />
                <Route path='/tap-list/admin' component={TapList} isAdmin true />
            </Switch>
        </div>
    );
}

export default App;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import EmployeeLogin from './EmployeeLogin';
import TapList from './TapList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kegList: [
                {
                    name: 'Pale Ale',
                    brewer: 'Fake Brewing Co.',
                    abv: 5.2,
                    pintPrice:5.00,
                    remainingPints: 98
                },
                {
                    name: 'IPA',
                    brewer: 'Fake Brewing Co.',
                    abv: 6.3,
                    pintPrice:5.50,
                    remainingPints: 9
                }
            ],
        };
        this.onClickSell = this.onClickSell.bind(this);
    }

    onClickSell(id) {
        let newKegList = this.state.kegList;
        newKegList[id].remainingPints--;
        console.log(newKegList[id].remainingPints);
        this.setState({kegList: newKegList});
    }

    render() {
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
                    <Route exact path='/tap-list' render={() => <TapList user="patron" kegList={this.state.kegList} onClickSell={this.onClickSell}/>} />
                    <Route path='/login' component={EmployeeLogin} />
                    <Route path='/tap-list/admin' render={() => <TapList user="employee" kegList={this.state.kegList} onClickSell={this.onClickSell}/>} />
                </Switch>
            </div>
        );
    }
}

// function App() {
//     return (
//         <div>
//             <style jsx global>{`
//                 body {
//                     background: black;
//                     color: white;
//                 }
//             `}</style>
//             <Switch>
//                 <Route exact path='/' component={Home}/>
//                 <Route path='/tap-list' component={TapList} isAdmin false />
//                 <Route path='/login' component={EmployeeLogin} />
//                 <Route path='/tap-list/admin' component={TapList} isAdmin true />
//             </Switch>
//         </div>
//     );
// }

export default App;
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
            addingNewKeg: false
        };
        this.handleClickSell = this.handleClickSell.bind(this);
        this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
        this.handleCancelAddNewKeg = this.handleCancelAddNewKeg.bind(this);
        this.handleSaveNewKeg = this.handleSaveNewKeg.bind(this);
    }

    handleClickSell(id) {
        let newKegList = this.state.kegList;
        newKegList[id].remainingPints--;
        this.setState({kegList: newKegList});
    }

    handleAddNewKeg() {
        this.setState({addingNewKeg: true});
    }

    handleCancelAddNewKeg() {
        this.setState({addingNewKeg: false});
    }

    handleSaveNewKeg(newKeg) {
        let newKegList = this.state.kegList;
        newKegList.push(newKeg);
        this.setState({kegList: newKegList, addingNewKeg: false});
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
                    <Route exact path='/tap-list' render={() => <TapList user="patron"
                        kegList={this.state.kegList}/>}/>
                    <Route path='/login' component={EmployeeLogin} />
                    <Route path='/tap-list/admin' render={() => <TapList user="employee"
                        kegList={this.state.kegList}
                        addingNewKeg={this.state.addingNewKeg}
                        onClickSell={this.handleClickSell}
                        onAddNewKeg={this.handleAddNewKeg}
                        onCancelAddNewKeg={this.handleCancelAddNewKeg}
                        onSaveNewKeg={this.handleSaveNewKeg}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
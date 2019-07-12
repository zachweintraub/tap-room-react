import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {

    let _newBrewery;
    let _newName;
    let _newAbv;
    let _newPrice;

    function onSaveNewKeg(event) {
        event.preventDefault();
        let newKeg = {
            name: _newName.value,
            brewer: _newBrewery.value,
            abv: _newAbv.value,
            pintPrice: _newPrice.value,
            remainingPints: 124
        };
        props.onSaveNewKeg(newKeg);
    }

    function onCancelAddNewKeg() {
        props.onCancelAddNewKeg();
    }

    return(
        <div>
            <form onSubmit={onSaveNewKeg}>
                <input placeholder='Brewery' ref={(input) => {_newBrewery = input;}}/>
                <input placeholder='Name' ref={(input) => {_newName = input;}}/>
                <input type='number' placeholder='ABV' ref={(input) => {_newAbv = input;}}/>
                <input type='number' placeholder='Price' ref={(input) => {_newPrice = input;}}/>
                <button type='submit'>Save</button>
            </form>
            <button onClick={onCancelAddNewKeg}>Cancel</button>
        </div>
    );

}

NewKegForm.propTypes = {
    onSaveNewKeg: PropTypes.func,
    onCancelAddNewKeg: PropTypes.func
};

export default NewKegForm;
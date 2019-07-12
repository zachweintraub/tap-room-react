import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {

    function onSaveNewKeg(e, newKeg) {
        e.preventDefault();
        props.onSaveNewKeg(newKeg);
    }

    function onCancelAddNewKeg() {
        props.onCancelAddNewKeg();
    }

    return(
        <div>
            <form onSubmit={() => {onSaveNewKeg(event, 'test');}}>
                <input placeholder='Brewery'/>
                <input placeholder='Name'/>
                <input type='number' placeholder='ABV'/>
                <input type='number' placeholder='Price'/>
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
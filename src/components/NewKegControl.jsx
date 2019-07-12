import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

function NewKegControl(props) {

    function onAddNewKeg() {
        props.onAddNewKeg();
    }

    if(!props.addingNewKeg){
        return(
            <button onClick={onAddNewKeg}>New Keg</button>
        );
    } else {
        return(
            <NewKegForm onSaveNewKeg={props.onSaveNewKeg}
                onCancelAddNewKeg={props.onCancelAddNewKeg}/>
        );
    }
}

NewKegControl.propTypes = {
    addingNewKeg: PropTypes.bool,
    onAddNewKeg: PropTypes.func,
    onSaveNewKeg: PropTypes.func,
    onCancelAddNewKeg: PropTypes.func   
};

export default NewKegControl;
import React from 'react';
import PropTypes from 'prop-types';


function EmployeeButtons(props) {

    function handleClickSell() {
        props.onClickSell(props.thisId);
    }

    function onClickDelete() {
        props.onClickDelete(props.thisId);
    }

    if(props.remaining > 0) {
        return (
            <td>
                <button onClick={handleClickSell}>Sell Pint</button>
                <button>Edit</button>
                <button onClick={onClickDelete}>Delete</button>
            </td>
        );
    } else {
        return (
            <td>
                <button>Edit</button>
            </td>
        );
    }
}

EmployeeButtons.propTypes = {
    onClickSell: PropTypes.func,
    onClickDelete: PropTypes.func,
    thisId: PropTypes.number
};

export default EmployeeButtons;
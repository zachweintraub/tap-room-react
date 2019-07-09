import React from 'react';
import PropTypes from 'prop-types';


function EmployeeButtons(props) {

    function handleClickSell() {
        props.onClickSell(props.thisId);
    }

    return (
        <td>
            <button onClick={handleClickSell}>Sell Pint</button>
            <button>Edit</button>
        </td>
    );
}

EmployeeButtons.propTypes = {
    key: PropTypes.number,
    onClickSell: PropTypes.func,
    thisId: PropTypes.number
};

export default EmployeeButtons;
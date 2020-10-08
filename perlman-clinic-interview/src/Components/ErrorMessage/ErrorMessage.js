
import React from 'react';
import { constants } from '../../Modules/contants';
import { styles } from '../../Modules/styles';

const ErrorMessage = () => {
    return(
        <div style={styles.inputErrorMessageText}> {constants.inputError.errorMessage} </div>
    )
}
export default ErrorMessage; 
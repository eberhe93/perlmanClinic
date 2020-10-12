import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { constants } from '../../Modules/contants';

const ToastMessage = props => {
  let { type } = props;
  return (
    <Alert severity={type} color={type}>
      {constants.toastmessages[`${type}`]}
    </Alert>
  );
};
export default ToastMessage;

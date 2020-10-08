import React from 'react';
import Alert from '@material-ui/lab/Alert';

const ToastMessage = props => {
  return (
    <Alert severity="success" color="info">
      {props.message}
    </Alert>
  );
};
export default ToastMessage;

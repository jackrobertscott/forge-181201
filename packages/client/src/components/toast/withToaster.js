import React from 'react';
import ToasterContext from './ToasterContext';

export default Component => ({ ...props }) => (
  <ToasterContext.Consumer>
    {({ ...contextProps }) => <Component {...props} {...contextProps} />}
  </ToasterContext.Consumer>
);

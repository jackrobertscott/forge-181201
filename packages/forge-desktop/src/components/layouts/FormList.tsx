import styled, { css } from 'styled-components';
import layouts from '../../styles/layouts';
import { Form } from 'formik';

export default styled(Form)`
  ${layouts.columns}
  flex-grow: 1;
  & > * {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

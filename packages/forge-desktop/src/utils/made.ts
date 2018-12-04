import styled from 'styled-components';
import clean from '../components/styles/clean';

export default (as: React.ReactNode, on: any[], attributes: object = {}) =>
  styled(as as any).attrs(attributes)`
    ${clean}
    ${on}
  `;

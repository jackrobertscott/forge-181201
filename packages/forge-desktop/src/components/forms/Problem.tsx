import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Background from '../layouts/Background';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';
import BadButton from '../buttons/BadButton';
import LargeInput from '../inputs/LargeInput';
import List from '../layouts/List';
import Card from '../cards/Card';
import layouts from '../../styles/layouts';
import shapes from '../../styles/shapes';
import Title from '../texts/Title';
import Subtitle from '../texts/Subtitle';
import FormList from '../layouts/FormList';
import { cleanFormPrefill } from '../../utils/form';

const Wrap = styled('div')`
  ${layouts.center}
  ${shapes.padded}
  flex-grow: 1;
  & > * {
    max-width: 400px;
  }
`;

export interface IReport {
  message?: string;
}

export interface IProblemProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
  };
}

const Problem: FunctionComponent<IProblemProps> = ({ handlers, data }) => {
  const prefill: IReport = cleanFormPrefill({
    message: '',
  });
  const validation = Yup.object().shape({
    message: Yup.string().trim(),
  });
  const form = () => {
    return (
      <Background>
        <Wrap>
          <Card>
            <FormList>
              <List>
                <div>
                  <Title>Ooooooops...</Title>
                  <Subtitle>We found an error in our code.</Subtitle>
                </div>
                <br />
                <Field
                  name="message"
                  label="What happened?"
                  help="To help us fix the problem faster, describe what you were trying to do just before the error happened. Thank you!"
                  placeholder="I tried to... but then..."
                  component={Control}
                  input={LargeInput}
                />
                <BadButton type="submit" loading={data.loading}>
                  Relaunch App
                </BadButton>
              </List>
            </FormList>
          </Card>
        </Wrap>
      </Background>
    );
  };
  return (
    <Formik
      initialValues={prefill}
      validationSchema={validation}
      onSubmit={handlers.submit}
      render={form}
    />
  );
};

export default Problem;

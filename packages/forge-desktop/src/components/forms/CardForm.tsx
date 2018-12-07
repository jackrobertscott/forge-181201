import React, { FunctionComponent } from 'react';
import { Formik, Field } from 'formik';
import { injectStripe } from 'react-stripe-elements';
import * as Yup from 'yup';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';
import FormList from '../layouts/FormList';

interface ICardFragment {}

interface ICardFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
  };
  stripe?: any;
}

const CardForm: FunctionComponent<ICardFormProps> = ({ data, handlers }) => {
  const prefill: ICardFragment = {};
  const validation = Yup.object().shape({});
  const form = () => (
    <FormList>
      <Field
        name="shortcutOpen"
        label="App Shortcut"
        help="The keyboard shortcut used to open this app."
        placeholder="CommandOrControl+D"
        component={Control}
        // problem={touched.shortcutOpen && errors.shortcutOpen}
      />
      <GoodButton type="submit" auto="right" min="true" loading={data.loading}>
        Save
      </GoodButton>
    </FormList>
  );
  return (
    <Formik
      initialValues={prefill}
      validationSchema={validation}
      onSubmit={handlers.submit}
      render={form}
    />
  );
};

export default injectStripe(CardForm);

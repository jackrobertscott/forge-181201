import React, { FunctionComponent } from 'react';
import { Formik, Field, FormikProps } from 'formik';
import { injectStripe, CardElement } from 'react-stripe-elements';
import * as Yup from 'yup';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';
import FormList from '../layouts/FormList';
import colors from '../../styles/colors';
import CardInput from '../inputs/CardInput';

export interface ICardFragment {
  name?: string;
}

export interface ICardFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    prefill: ICardFragment;
    loading: boolean;
  };
  stripe?: any;
}

const CardForm: FunctionComponent<ICardFormProps> = ({ data, handlers }) => {
  const prefill: ICardFragment = {
    name: '',
    ...(data.prefill || {}),
  };
  const validation = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(),
    coupon: Yup.string().trim(),
  });
  const form = ({ errors, touched }: FormikProps<ICardFragment>) => (
    <FormList>
      <Field
        name="name"
        label="Name"
        help="The name on the card."
        placeholder="E.g. Mr Harold Potter"
        component={Control}
        problem={touched.name && errors.name}
      />
      <Control
        label="Card"
        help="The card details."
        input={CardInput}
        hidePostalCode={true}
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

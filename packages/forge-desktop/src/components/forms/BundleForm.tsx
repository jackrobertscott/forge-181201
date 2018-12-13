import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import LargeInput from '../inputs/LargeInput';
import { IComponentProps } from '../../utils/components';
import FormList from '../layouts/FormList';
import { cleanFormPrefill } from '../../utils/form';

export interface IBundleFragment {
  name?: string;
  readme?: string;
}

export interface IBundleFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
    prefill: IBundleFragment;
  };
}

const BundleForm: FunctionComponent<IBundleFormProps> = ({
  data,
  handlers,
}) => {
  const prefill: IBundleFragment = cleanFormPrefill(
    {
      name: '',
      readme: '',
    },
    data.prefill
  );
  const validation = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(),
    readme: Yup.string()
      .trim()
      .required(),
  });
  const form = ({ errors, touched }: FormikProps<IBundleFragment>) => (
    <FormList>
      <Field
        name="name"
        label="Name"
        help="The bundle name."
        placeholder="E.g. React Forms"
        component={Control}
        problem={touched.name && errors.name}
      />
      <Field
        name="readme"
        label="Description"
        help="A brief description what the bundle contains."
        placeholder="E.g. i-dont-like-spiders"
        component={Control}
        input={LargeInput}
        problem={touched.readme && errors.readme}
      />
      <GoodButton type="submit" auto="right" min="true" loading={data.loading}>
        Create
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

export default BundleForm;

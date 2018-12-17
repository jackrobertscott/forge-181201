import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';
import FormList from '../layouts/FormList';
import { cleanFormPrefill } from '../../utils/form';

export interface ISecurityFragment {
  oldPassword?: string;
  newPassword?: string;
}

export interface ISecurityFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
    prefill: ISecurityFragment;
  };
}

const SecurityForm: FunctionComponent<ISecurityFormProps> = ({
  data,
  handlers,
}) => {
  const prefill: ISecurityFragment = cleanFormPrefill(
    {
      oldPassword: '',
      newPassword: '',
    },
    data.prefill
  );
  const validation = Yup.object().shape({
    oldPassword: Yup.string()
      .min(5)
      .trim(),
    newPassword: Yup.string()
      .min(5)
      .trim(),
  });
  const form = ({ errors, touched }: FormikProps<ISecurityFragment>) => (
    <FormList>
      <Field
        type="password"
        name="oldPassword"
        label="Current Password"
        help="The password you are currently using."
        placeholder="**********"
        component={Control}
        problem={touched.oldPassword && errors.oldPassword}
      />
      <Field
        type="password"
        name="newPassword"
        label="New Password"
        help="The password you wish to change to."
        placeholder="**********"
        component={Control}
        problem={touched.newPassword && errors.newPassword}
      />
      <GoodButton type="submit" auto="right" loading={data.loading}>
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

export default SecurityForm;

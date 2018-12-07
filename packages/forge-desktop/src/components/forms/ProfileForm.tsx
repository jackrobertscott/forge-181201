import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';
import FormList from '../layouts/FormList';

export interface IProfileFragment {
  name?: string;
  username?: string;
  email?: string;
}

export interface IProfileFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
    profile: IProfileFragment;
  };
}

const ProfileForm: FunctionComponent<IProfileFormProps> = ({
  data,
  handlers,
}) => {
  const prefill: IProfileFragment = {
    name: '',
    username: '',
    email: '',
    ...(data.profile || {}),
  };
  const validation = Yup.object().shape({
    name: Yup.string().trim(),
    username: Yup.string().trim(),
    email: Yup.string().trim(),
  });
  const form = ({ errors, touched }: FormikProps<IProfileFragment>) => (
    <FormList>
      <Field
        name="name"
        label="Your Name"
        help="What do you want us to call you?"
        placeholder="E.g. Ron Weasley"
        component={Control}
        problem={touched.name && errors.name}
      />
      <Field
        name="username"
        label="Username"
        help="Your own unique identifier."
        placeholder="E.g. i-dont-like-spiders"
        component={Control}
        problem={touched.name && errors.name}
      />
      <Field
        name="email"
        label="Email"
        help="Get occasional emails - not more than one per month."
        placeholder="E.g. ron@hogwartz.edu.org"
        component={Control}
        problem={touched.name && errors.name}
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

export default ProfileForm;

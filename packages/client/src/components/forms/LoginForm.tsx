import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field, Form } from 'formik';
import * as Yup from 'yup';
import List from '../layouts/List';
import GoodButton from '../buttons/GoodButton';
import { IComponentProps } from '../../utils/components';
import SimpleInput from '../inputs/SimpleInput';
import Arrow from '../buttons/Arrow';
import Onboard from '../layouts/Onboard';
import { cleanFormPrefill } from '../../utils/form';
import Problems from '../cards/Problems';

interface IUserFragment {
  username?: string;
  password?: string;
}

interface ILoginFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
  };
}

const LoginForm: FunctionComponent<ILoginFormProps> = ({ data, handlers }) => {
  const prefill: IUserFragment = cleanFormPrefill({
    username: '',
    password: '',
  });
  const validation = Yup.object().shape({
    username: Yup.string()
      .trim()
      .required(),
    password: Yup.string()
      .trim()
      .min(5)
      .required(),
  });
  const form = ({ errors, touched }: FormikProps<IUserFragment>) => {
    return (
      <Onboard back={true}>
        <Form>
          <List>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              component={SimpleInput}
              problem={touched.username && errors.username}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={SimpleInput}
              problem={touched.password && errors.password}
            />
            {!!Object.keys(errors).length && <Problems items={errors as any} />}
            <GoodButton
              type="submit"
              bright="true"
              loading={data.loading}
              icon={<Arrow />}
            >
              Login
            </GoodButton>
          </List>
        </Form>
      </Onboard>
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

export default LoginForm;

import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field, Form } from 'formik';
import * as Yup from 'yup';
import List from '../layouts/List';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';

interface IProfileFragment {
  name: string;
}

interface IProfileFormProps extends IComponentProps {
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
    ...(data.profile || {}),
  };
  const validation = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(),
  });
  const form = ({ errors, touched }: FormikProps<IProfileFragment>) => (
    <Form>
      <List>
        <Field
          name="name"
          label="Todo Name"
          help="The name of your snippet."
          placeholder="E.g. React Component"
          component={Control}
          problem={touched.name && errors.name}
        />
        <GoodButton type="submit" loading={data.loading}>
          Save
        </GoodButton>
      </List>
    </Form>
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

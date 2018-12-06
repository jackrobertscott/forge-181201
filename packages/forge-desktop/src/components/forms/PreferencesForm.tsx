import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field, Form } from 'formik';
import * as Yup from 'yup';
import List from '../layouts/List';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';

interface IPreferencesFragment {
  shortcutOpen: string;
}

interface IPreferencesFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
    preferences: IPreferencesFragment;
  };
}

const PreferencesForm: FunctionComponent<IPreferencesFormProps> = ({
  data,
  handlers,
}) => {
  const prefill: IPreferencesFragment = {
    shortcutOpen: '',
    ...(data.preferences || {}),
  };
  const validation = Yup.object().shape({
    shortcutOpen: Yup.string().trim(),
  });
  const form = ({ errors, touched }: FormikProps<IPreferencesFragment>) => (
    <Form>
      <List>
        <Field
          name="shortcutOpen"
          label="Todo Name"
          help="The name of your snippet."
          placeholder="E.g. React Component"
          component={Control}
          problem={touched.shortcutOpen && errors.shortcutOpen}
        />
        <GoodButton type="submit" loading={data.loading}>
          Create
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

export default PreferencesForm;

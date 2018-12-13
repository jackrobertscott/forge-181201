import React, { FunctionComponent } from 'react';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import GoodButton from '../buttons/GoodButton';
import Control from '../inputs/Control';
import { IComponentProps } from '../../utils/components';
import FormList from '../layouts/FormList';
import { cleanFormPrefill } from '../../utils/form';

export interface IPreferencesFragment {
  shortcutOpen?: string;
}

export interface IPreferencesFormProps extends IComponentProps {
  handlers: {
    submit: (data: any) => void;
  };
  data: {
    loading: boolean;
    prefill: IPreferencesFragment;
  };
}

const PreferencesForm: FunctionComponent<IPreferencesFormProps> = ({
  data,
  handlers,
}) => {
  const prefill: IPreferencesFragment = cleanFormPrefill(
    { shortcutOpen: '' },
    data.prefill
  );
  const validation = Yup.object().shape({
    shortcutOpen: Yup.string().trim(),
  });
  const form = ({ errors, touched }: FormikProps<IPreferencesFragment>) => (
    <FormList>
      <Field
        name="shortcutOpen"
        label="App Shortcut"
        help="The keyboard shortcut used to open this app."
        placeholder="CommandOrControl+D"
        component={Control}
        problem={touched.shortcutOpen && errors.shortcutOpen}
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

export default PreferencesForm;

import React, { Component, ReactNode } from 'react';
import * as Sentry from '@sentry/browser';
import config from '../../config';
import Problem from '../../components/forms/Problem';

interface IErrorCatchProps {
  children: ReactNode;
}

interface IErrorCatchState {
  error: any;
}

export default class ErrorCapture extends Component<
  IErrorCatchProps,
  IErrorCatchState
> {
  constructor(props: IErrorCatchProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  public componentDidCatch(error: any, info: any) {
    if (!config.debug) {
      this.setState({ error });
      Sentry.withScope(scope => {
        Object.keys(info).forEach(key => {
          scope.setExtra(key, info[key]);
        });
        Sentry.captureException(error);
      });
    }
  }

  public render() {
    if (this.state.error) {
      const handlers = {
        submit: this.submit,
      };
      const data = {
        loading: false,
      };
      return <Problem handlers={handlers} data={data} />;
    }
    return this.props.children;
  }

  private submit = ({ message }: { message: string }) => {
    console.log('Todo: send message to Sentry...');
    console.log('Todo: relaunch app...');
    // runElectron(electron => {
    //   electron.ipcRenderer.send('relaunch');
    // });
  };
}

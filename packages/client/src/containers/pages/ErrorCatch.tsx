import React, { Component, ReactNode } from 'react';
import * as Sentry from '@sentry/browser';
import config from '../../config';
import Problem from '../../components/forms/Problem';
import { runElectron } from '../../utils/electron';

export interface IErrorCatchProps {
  children: ReactNode;
}

export interface IErrorCatchState {
  error: any;
  info: any;
}

export default class ErrorCapture extends Component<
  IErrorCatchProps,
  IErrorCatchState
> {
  constructor(props: IErrorCatchProps) {
    super(props);
    this.state = {
      error: null,
      info: null,
    };
  }

  public componentDidCatch(error: any, info: any) {
    if (!config.debug) {
      this.setState({ error, info });
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
    const { error, info } = this.state;
    Sentry.withScope(scope => {
      scope.setExtra('message', message);
      Object.keys(info).forEach(key => scope.setExtra(key, info[key]));
      Sentry.captureException(error);
    });
    runElectron(electron => {
      electron.ipcRenderer.send('relaunch');
    });
  };
}

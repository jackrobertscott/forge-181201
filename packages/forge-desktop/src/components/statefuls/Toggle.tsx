import { ReactNode, Component } from 'react';

export interface IToggleBag {
  active: boolean;
  toggle: (override?: boolean) => void;
}

interface IToggleProps {
  children: (props: IToggleBag) => ReactNode;
  [name: string]: any;
}

interface IToggleState {
  active: boolean;
}

export default class Toggle extends Component<IToggleProps, IToggleState> {
  constructor(props: IToggleProps) {
    super(props);
    this.state = {
      active: false,
    };
  }

  public render() {
    const { active } = this.state;
    const { children } = this.props;
    return children({ active, toggle: this.toggle });
  }

  private toggle = (override?: boolean) => {
    const { active } = this.state;
    this.setState({ active: override !== undefined ? override : !active });
  };
}

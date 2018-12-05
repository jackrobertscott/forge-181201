import { ReactNode, Component } from 'react';

export interface IToggle {
  active: boolean;
  toggle: (override?: boolean) => any;
  open: () => any;
  close: () => any;
}

interface IToggleProps {
  children: (props: IToggle) => ReactNode;
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
    return children({
      active,
      toggle: this.toggle,
      open: () => this.toggle(true),
      close: () => this.toggle(false),
    });
  }

  private toggle = (override?: boolean) => {
    const { active } = this.state;
    this.setState({ active: override !== undefined ? override : !active });
  };
}

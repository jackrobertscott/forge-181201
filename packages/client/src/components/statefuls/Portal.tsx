import { ReactNode, Component } from 'react';
import ReactDOM from 'react-dom';

export interface IPortalProps {
  children: ReactNode;
}

export interface IPortalState {}

export default class Portal extends Component<IPortalProps, IPortalState> {
  private root: HTMLElement | null;
  private hook: HTMLElement;

  constructor(props: IPortalProps) {
    super(props);
    this.root = document.getElementById('root');
    this.hook = document.createElement('div');
  }

  public componentDidMount() {
    if (this.root) {
      this.root.appendChild(this.hook);
    }
  }

  public componentWillUnmount() {
    if (this.root) {
      this.root.removeChild(this.hook);
    }
  }

  public render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.hook);
  }
}

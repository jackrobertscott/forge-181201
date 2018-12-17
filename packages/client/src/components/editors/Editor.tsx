import React, { Component, RefObject } from 'react';
import styled from 'styled-components';
import { throttle } from 'throttle-debounce';
import Color from 'color';
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';
import 'monaco-editor/esm/vs/editor/contrib/snippet/snippetController2';
import colors from '../../styles/colors';

const Container = styled('div')`
  flex-grow: 1;
`;

Monaco.editor.defineTheme('phantom', {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { background: colors.night.replace('#', ''), token: '' },
    { foreground: colors.white.replace('#', ''), token: '' },
  ],
  colors: {
    'editor.foreground': colors.white,
    'editor.background': colors.night,
    'editor.lineHighlightBackground': Color(colors.night)
      .lighten(0.3)
      .hex(),
  },
});

export interface IEditorProps {
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  style?: any;
  initialValue?: string;
  value?: string;
  language?: string;
  snippeting?: boolean;
  meta?: any;
  command?: {
    keycode: number;
    action: (...args: any[]) => any;
    context?: string;
  };
}

export default class Editor extends Component<IEditorProps> {
  /**
   * Resize editor to fit screen.
   */
  private resize = throttle(300, () => {
    if (this.editor) {
      this.editor.layout({ height: 0, width: 0 });
      this.editor.layout();
    }
  });
  private container: RefObject<any>;
  private editor?: Monaco.editor.IStandaloneCodeEditor;
  constructor(props: IEditorProps) {
    super(props);
    this.container = React.createRef();
  }
  /**
   * Load and configure the editor.
   */
  public componentDidMount() {
    const { initialValue, value, language, command } = this.props;
    this.editor = Monaco.editor.create(this.container.current, {
      value: initialValue || value,
      language,
      theme: 'phantom',
      minimap: {
        enabled: false,
      },
    });
    window.addEventListener('resize', this.resize);
    setTimeout(() => this.resize()); // push to next tick
    this.configureEditor();
    this.handleEvents();
    if (command) {
      this.editor.addCommand(
        command.keycode,
        event => {
          const { meta } = this.props;
          const contents = this.editor && this.editor.getValue();
          command.action({ value: contents, event, meta });
        },
        command.context || ''
      );
    }
  }
  /**
   * Unsubscribe from listeners.
   */
  public componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  /**
   * Insert a code snippet (such as "const ${2:defaultElement} = null;") and
   * allow the user to start inserting the default variables.
   *
   * @see https://github.com/Microsoft/monaco-editor/issues/1112
   */
  public componentDidUpdate(oldProps: IEditorProps) {
    const { value, snippeting } = this.props;
    if (this.editor) {
      if (snippeting && !oldProps.snippeting) {
        this.editor.focus();
        this.editor.setValue('');
        const contribution: any = this.editor.getContribution(
          'snippetController2'
        );
        if (contribution) {
          contribution.insert(value);
        }
      } else if (value && value !== this.editor.getValue() && !snippeting) {
        this.editor.setValue(value);
      }
    }
    const active: any = document.activeElement;
    if (oldProps.snippeting && !snippeting && active) {
      active.blur();
    }
  }
  /**
   * Editor is wrapped so that it has nice spacing.
   */
  public render() {
    return <Container ref={this.container} style={this.props.style} />;
  }
  /**
   * Make sure editor is setup nicely.
   */
  private configureEditor() {
    if (this.editor) {
      const model = this.editor.getModel();
      if (model) {
        model.updateOptions({ tabSize: 2 });
      }
    }
  }
  /**
   * Call the event handlers provided in props when the
   * corresponding editor action occurs.
   */
  private handleEvents() {
    if (this.editor) {
      this.editor.onDidChangeModelContent(() => {
        const { onChange, meta } = this.props;
        const value = this.editor && this.editor.getValue();
        if (onChange) {
          onChange({ value, event, meta });
        }
      });
      this.editor.onDidBlurEditorText(() => {
        const { onBlur, meta } = this.props;
        const value = this.editor && this.editor.getValue();
        if (onBlur) {
          onBlur({ value, event, meta });
        }
      });
    }
  }
}

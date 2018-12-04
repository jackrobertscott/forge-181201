import * as React from 'react';
import styled from 'styled-components';
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';
import 'monaco-editor/esm/vs/editor/contrib/snippet/snippetController2';
import colors from '../../styles/colors';

const Wrap = styled.div`
  padding: 15px 0 0;
  background-color: ${colors.night};
`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
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
  },
});

interface IEditorProps {
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  initialValue?: string;
  value?: string;
  language?: string;
  snippeting?: boolean;
  command?: {
    keycode: number;
    action: (...args: any[]) => any;
    context: string;
  };
}

export default class Editor extends React.Component<IEditorProps> {
  public static defaultProps = {
    onChange: () => null,
    onBlur: () => null,
    initialValue: null,
    value: null,
    language: null,
    snippeting: false,
    command: null,
  };

  private container: React.RefObject<any>;
  private editor?: Monaco.editor.IStandaloneCodeEditor;

  constructor(props: IEditorProps) {
    super(props);
    this.container = React.createRef();
  }

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
    this.configureEditor();
    this.handleEvents();
    if (command) {
      this.editor.addCommand(
        command.keycode,
        event => {
          const contents = this.editor && this.editor.getValue();
          command.action({ value: contents, event });
        },
        command.context || ''
      );
    }
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

  public render() {
    return (
      <Wrap>
        <Container ref={this.container} />
      </Wrap>
    );
  }

  private configureEditor() {
    if (this.editor) {
      const model = this.editor.getModel();
      if (model) {
        model.updateOptions({ tabSize: 2 });
      }
    }
  }

  private handleEvents() {
    const { onChange, onBlur } = this.props;
    if (this.editor) {
      this.editor.onDidChangeModelContent(() => {
        const value = this.editor && this.editor.getValue();
        if (onChange) {
          onChange({ value, event });
        }
      });
      this.editor.onDidBlurEditorText(() => {
        const value = this.editor && this.editor.getValue();
        if (onBlur) {
          onBlur({ value, event });
        }
      });
    }
  }
}

import React, { FunctionComponent, ReactNode } from 'react';
import { IComponentProps } from '../../utils/components';
import Split from '../layouts/Split';
import Card from '../cards/Card';
import Modal from '../layouts/Modal';
import { IToggle } from '../statefuls/Toggle';
import { IBundleFragment } from '../layouts/Marketplace';
import List from '../layouts/List';
import Title from '../texts/Title';
import Subtitle from '../texts/Subtitle';
import words from '../../styles/words';
import styled from 'styled-components';
import RegularEditor from '../editors/RegularEditor';
import GoodButton from '../buttons/GoodButton';
import layouts from '../../styles/layouts';
import Button from '../buttons/Button';
import up from '../../assets/features/Up.svg';

const Readme = styled('div')`
  ${words.secondary}
`;

const Top = styled('div')`
  ${layouts.rowsCenter}
  & > *:nth-child(2) {
    margin: 0 10px;
  }
`;

const Left = styled('img')`
  transform: rotate(-90deg);
  display: block;
  height: 18px;
  filter: invert(35%);
`;

const Right = styled('img')`
  transform: rotate(90deg);
  display: block;
  height: 18px;
  filter: invert(35%);
`;

export interface IPreviewBundleModalProps extends IComponentProps {
  children: (bag: IToggle) => ReactNode;
  data: {
    bundle: IBundleFragment;
  };
  handlers: {
    subscribe: (bundle: IBundleFragment) => any;
  };
}

const PreviewBundleModal: FunctionComponent<IPreviewBundleModalProps> = ({
  children,
  data,
  handlers,
}) => {
  const chooseBundle = () => handlers.subscribe(data.bundle);
  const modal = () => (
    <Split modal={true}>
      <List>
        <Card style={{ flexGrow: 0 }}>
          <Title>{data.bundle.name}</Title>
          <Subtitle>{data.bundle.codeCount} Snippets</Subtitle>
          <br />
          <GoodButton style={{ width: '100%' }} onClick={chooseBundle}>
            Get this bundle
          </GoodButton>
        </Card>
        <Card style={{ flexGrow: 0 }}>
          <Readme>{data.bundle.readme}</Readme>
        </Card>
      </List>
      <List>
        <Top>
          <Button>
            <Left src={up} />
          </Button>
          <Card slim={true}>
            <Readme>React Component</Readme>
          </Card>
          <Button>
            <Right src={up} />
          </Button>
        </Top>
        <RegularEditor
          value="console.log('Hello world!')"
          style={{ height: '50vh' }}
        />
      </List>
    </Split>
  );
  return <Modal component={modal}>{children}</Modal>;
};

export default PreviewBundleModal;

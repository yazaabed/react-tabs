import React from 'react';
import { storiesOf } from '@storybook/react';
import TabsReadme from '@feuer/react-tabs/README.md';

storiesOf('Welcome', module)
    .add('react-tabs', () => <div />, {
        readme: {
            codeTheme: 'duotone-sea',
            content: TabsReadme
        },
    });
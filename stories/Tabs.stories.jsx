import React from 'react';
import { Tabs } from '@feuer/react-tabs';
import { storiesOf } from '@storybook/react';
import TabsReadme from '@feuer/react-tabs/README.md';

export const TabsLeft = () => (
  <Tabs
    activeTab={{
      id: "tab1"
    }}
  >
    <Tabs.Tab id="tab1" title="html">
      <h1>HTML Ipsum Presents</h1>

      <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

      <h2>Header Level 2</h2>

      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

      <h3>Header Level 3</h3>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>
    </Tabs.Tab>
    <Tabs.Tab id="tab2" title="ul">
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
        <li>Vestibulum auctor dapibus neque.</li>
      </ul>
    </Tabs.Tab>
    <Tabs.Tab id="tab3" title="dl">
      <dl>
        <dt>Definition list</dt>
        <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.</dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.</dd>
      </dl>
    </Tabs.Tab>
    <Tabs.Tab id="tab4" title="React Component">
      <Tabs
        tabsProps={{
          style: {
            textAlign: "right"
          }
        }}
        activeTab={{
          id: "tab1"
        }}
      >
        <Tabs.Tab id="tab1" title="Tab 1">
          This is tab 1
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Tab 2">
          This is tab 2
      </Tabs.Tab>
      </Tabs>
    </Tabs.Tab>
  </Tabs>
);

export const TabsRight = () => (
  <Tabs
    tabsProps={{
      style: {
        textAlign: "right"
      }
    }}
    activeTab={{
      id: "tab1"
    }}
  >
    <Tabs.Tab id="tab1" title="Tab 1">
      This is tab 1
    </Tabs.Tab>
    <Tabs.Tab id="tab2" title="Tab 2">
      This is tab 2
      </Tabs.Tab>
  </Tabs>
);

export const TabsCenter = () => (
  <Tabs
    tabsProps={{
      style: {
        textAlign: "center"
      }
    }}
    activeTab={{
      id: "tab1"
    }}
  >
    <Tabs.Tab id="tab1" title="Tab 1" tabIndex={1}>
      This is tab 1
    </Tabs.Tab>
    <Tabs.Tab id="tab2" title="Tab 2" tabIndex={1}>
      This is tab 2
      </Tabs.Tab>
  </Tabs>
);

storiesOf('Tabs', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: null,
      sidebar: TabsReadme
    },
  })
  .add('Tabs Left', TabsLeft)
  .add('Tabs Right', TabsRight)
  .add('Tabs Center', TabsCenter);
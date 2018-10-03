//export { default as Tabs } from './components/Tabs';
import React from 'react';
import { render } from 'react-dom';
import Tabs from './components/Tabs';

console.log(Tabs);

render(
  <Tabs
    activeTab={{
      id: "tab1"
    }}
  >
    <React.Fragment>
      <Tabs.Tab id="tab1" title="Tab 1">
        This is tab 1
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Tab 2">
        This is tab 2
      </Tabs.Tab>
    </React.Fragment>
  </Tabs>
, document.getElementById('root'));
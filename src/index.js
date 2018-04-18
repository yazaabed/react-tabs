import React from "react";
import { render } from "react-dom";
import Tabs from "./components/Tabs";
import glamorous from "glamorous";

const App = () => (
  <Tabs
    activeTab={{
      id: "tab1"
    }}
  >
    <React.Fragment>
      <Tabs.Tab id="tab1" title="Tab 1">
        <glamorous.Div padding={20}>This is tab 1</glamorous.Div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Tab 2">
        <glamorous.Div padding={20}>This is tab 2</glamorous.Div>
      </Tabs.Tab>
    </React.Fragment>
  </Tabs>
);

render(<App />, document.getElementById("root"));

import React, { Component } from "react";
import * as TabsContext from "./TabsContext";

class Tab extends Component {
  render() {
    return React.createElement(TabsContext.TabConsumer, null, value => {
      value.context.addTab({
        id: this.props.id,
        title: this.props.title
      });
      return value.context.activeTab.id === this.props.id && this.props.children;
    });
  }

}

export default Tab;
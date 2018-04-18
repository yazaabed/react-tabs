import React, { Component } from "react";
import * as TabsContext from "./TabsContext";

class Tab extends Component {
  render() {
    return (
      <TabsContext.TabConsumer>
        {value => {
          value.context.addTab({
            id: this.props.id,
            title: this.props.title
          });

          return (
            value.context.activeTab.id === this.props.id && this.props.children
          );
        }}
      </TabsContext.TabConsumer>
    );
  }
}

export default Tab;

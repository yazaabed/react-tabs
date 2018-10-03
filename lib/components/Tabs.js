function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import glamorous from "glamorous";
import * as TabsContext from "./TabsContext";
import Tab from "./Tab";
const ListTabs = glamorous.ul({
  paddingLeft: 0,
  listStyle: "none",
  margin: 0
});
const TabTitleItem = glamorous.li({
  display: "inline-block",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
});
const ActiveTabBorder = glamorous.div({
  height: 4,
  backgroundColor: "#0088dd",
  position: "absolute",
  bottom: 0,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  willChange: "left, width"
}, props => {
  return props.activeTabElement && {
    width: props.activeTabElement.offsetWidth,
    left: props.activeTabElement.offsetLeft
  };
});
const TabAnchorItem = glamorous.a({
  textTransform: "capitalize",
  color: "#000000",
  fontWeight: 600,
  padding: "16px 30px",
  cursor: "pointer",
  opacity: "0.4",
  display: "block",
  textDecoration: "none",
  ":hover": {
    opacity: 1
  }
}, props => {
  return props.isActiveTab && {
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    cursor: "default",
    opacity: 1
  };
});
const TabsContainer = glamorous.div({
  position: "relative",
  borderBottom: "1px solid #dfdfdf"
});
const ReactTabs = glamorous.div({
  position: "realative"
});

class Tabs extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      tabsElements: []
    });
  }

  render() {
    return React.createElement(TabsContext.TabProvider, {
      activeTab: this.props.activeTab
    }, React.createElement(TabsContext.TabConsumer, null, value => React.createElement(ReactTabs, null, React.createElement(TabsContainer, null, React.createElement(ListTabs, null, value.context.tabs.map((tab, index) => React.createElement(TabTitleItem, {
      key: index,
      id: tab.id,
      innerRef: tabElement => {
        if (!this.state.tabsElements[tab.id]) {
          this.setState((prevState, props) => {
            const tabsElements = prevState.tabsElements;
            tabsElements[tab.id] = tabElement;
            return {
              tabsElements
            };
          });
        }
      }
    }, React.createElement(TabAnchorItem, {
      isActiveTab: value.context.activeTab.id === tab.id,
      href: "#",
      onClick: value.context.onClick(tab),
      onKeyPress: event => {
        const code = event.keyCode || event.which;

        if (code === 13) {
          this.onClick(tab)(event);
        }
      }
    }, tab.title)))), React.createElement(ActiveTabBorder, {
      activeTabElement: this.state.tabsElements[value.context.activeTab.id]
    })), this.props.children)));
  }

}

_defineProperty(Tabs, "Tab", Tab);

export default Tabs;
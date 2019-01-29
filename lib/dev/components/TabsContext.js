function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
const TabsContext = React.createContext({
  context: {
    prevActiveTab: {},
    activeTab: {}
  }
});

class TabProvider extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      tabs: [],
      prevActiveTab: {},
      activeTab: this.props.activeTab
    });

    _defineProperty(this, "addTab", tab => {
      const isTabExist = this.state.tabs.find(t => tab.id === t.id);

      if (!isTabExist) {
        this.setState((prevState, props) => {
          return {
            tabs: prevState.tabs.concat(tab)
          };
        });
      }
    });

    _defineProperty(this, "removeTab", tabId => {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.filter(tab => tab.id !== tabId)
        };
      });
    });

    _defineProperty(this, "onClick", tab => event => {
      this.setState((prevState, props) => {
        return {
          prevActiveTab: prevState.activeTab,
          activeTab: tab
        };
      });
    });
  }

  render() {
    return React.createElement(TabsContext.Provider, {
      value: {
        context: _objectSpread({}, this.state, {
          addTab: this.addTab,
          removeTab: this.removeTab,
          onClick: this.onClick
        })
      }
    }, this.props.children);
  }

}

const TabConsumer = TabsContext.Consumer;
export { TabProvider, TabsContext, TabConsumer };
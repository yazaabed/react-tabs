import React from "react";

const TabsContext = React.createContext({
  context: {
    prevActiveTab: {},
    activeTab: {}
  }
});

class TabProvider extends React.Component {
  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab
  };

  addTab = tab => {
    const isTabExist = this.state.tabs.find((t) => tab.id === t.id);

    if (!isTabExist) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(tab)
        };
      });
    }
  };

  removeTab = tabId => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  onClick = tab => event => {
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab
      };
    });
  };

  render() {
    return (
      <TabsContext.Provider
        value={{
          context: {
            ...this.state,
            addTab: this.addTab,
            removeTab: this.removeTab,
            onClick: this.onClick
          }
        }}
      >
        {this.props.children}
      </TabsContext.Provider>
    );
  }
}

const TabConsumer = TabsContext.Consumer;

export { TabProvider, TabsContext, TabConsumer };

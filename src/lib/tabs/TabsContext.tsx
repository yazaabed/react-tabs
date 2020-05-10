import React from "react";

const TabsContext = React.createContext({
  context: {
    prevActiveTab: {},
    activeTab: { id: null },
    tabs: [],
    addTab: (tab: any) => {},
    removeTab: (tab: any) => {},
    onClick: (tab: any) => (event: any) => {}
  }
});

class TabProvider extends React.Component {
  props: {
    activeTab: any;
    children: any;
  };

  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab
  };

  addTab = (tab: any) => {
    const isTabExist = this.state.tabs.find((t) => tab.id === t.id);

    if (!isTabExist) {
      this.setState((prevState: { tabs: any[] }, props) => {
        return {
          tabs: prevState.tabs.concat(tab)
        };
      });
    }
  };

  removeTab = (tabId: string) => {
    this.setState((prevState: { tabs: any[] }, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  onClick = tab => event => {
    this.setState((prevState: { activeTab: any }, props) => {
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

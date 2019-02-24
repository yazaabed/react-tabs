import React from "react";
import { TabProvider, TabConsumer } from "./TabsContext";
import TabItem from "./Tab";

const ListTabs = ({ children }) => (
  <ul style={{
    paddingLeft: 0,
    listStyle: "none",
    margin: 0
  }}>{ children }</ul>
);

const TabTitleItem = ({ children, innerRef, ...restProps }) => (
  <li 
  ref={innerRef}
  style={{
    display: "inline-block",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  }} { ...restProps }>{ children }</li>
);

const ActiveTabBorder = ({ activeTabElement, children, ...restProps }) => {
  const style = {
    height: 4,
    backgroundColor: "#0088dd",
    position: "absolute",
    bottom: 0,
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    willChange: "left, width"
  };

  if (activeTabElement) {
    style.width = activeTabElement.offsetWidth;
    style.left = activeTabElement.offsetLeft;
  }

  return (
    <div style={style} { ...restProps }>
      { children }
    </div>
  )
};

const TabAnchorItem = ({ isActiveTab, children, ...restProps}) => {
  const style = {
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
  }

  if (isActiveTab) {
    style.transition = "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";
    style.cursor = "default";
    style.opacity = 1;
  }

  return (
    <a style={style} {...restProps}>{ children }</a>
  );
};


const TabsContainer = ({ children, ...restProps }) => (
  <div style={{
    position: "relative",
    borderBottom: "1px solid #dfdfdf"
  }}
  { ...restProps }>
    { children }
  </div>
);

const ReactTabs = ({ children, ...restProps }) => (
  <div style={{
    position: "realative"
  }}
  { ...restProps }>
    { children }
  </div>
);

class Tabs extends React.Component {
  static Tab = TabItem;

  state = {
    tabsElements: []
  };

  render() {
    return (
      <TabProvider activeTab={this.props.activeTab}>
        <TabConsumer>
          {value => (
            <ReactTabs>
              <TabsContainer>
                <ListTabs>
                  {value.context.tabs.map((tab, index) => (
                    <TabTitleItem
                      key={index}
                      id={tab.id}
                      innerRef={tabElement => {
                        if (!this.state.tabsElements[tab.id]) {
                          this.setState((prevState, props) => {
                            const tabsElements = prevState.tabsElements;
                            tabsElements[tab.id] = tabElement;

                            return {
                              tabsElements
                            };
                          });
                        }
                      }}
                    >
                      <TabAnchorItem
                        isActiveTab={value.context.activeTab.id === tab.id}
                        href="javascript:void(0)"
                        onClick={value.context.onClick(tab)}
                        onKeyPress={event => {
                          const code = event.keyCode || event.which;

                          if (code === 13) {
                            this.onClick(tab)(event);
                          }
                        }}
                      >
                        {tab.title}
                      </TabAnchorItem>
                    </TabTitleItem>
                  ))}
                </ListTabs>

                <ActiveTabBorder
                  activeTabElement={
                    this.state.tabsElements[value.context.activeTab.id]
                  }
                />
              </TabsContainer>

              {this.props.children}
            </ReactTabs>
          )}
        </TabConsumer>
      </TabProvider>
    );
  }
}

export default Tabs;

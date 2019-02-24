function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import { TabProvider, TabConsumer } from "./TabsContext";
import TabItem from "./Tab";

const ListTabs = ({
  children
}) => React.createElement("ul", {
  style: {
    paddingLeft: 0,
    listStyle: "none",
    margin: 0
  }
}, children);

const TabTitleItem = (_ref) => {
  let {
    children,
    innerRef
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["children", "innerRef"]);

  return React.createElement("li", _extends({
    ref: innerRef,
    style: {
      display: "inline-block",
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    }
  }, restProps), children);
};

const ActiveTabBorder = (_ref2) => {
  let {
    activeTabElement,
    children
  } = _ref2,
      restProps = _objectWithoutProperties(_ref2, ["activeTabElement", "children"]);

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

  return React.createElement("div", _extends({
    style: style
  }, restProps), children);
};

const TabAnchorItem = (_ref3) => {
  let {
    isActiveTab,
    children
  } = _ref3,
      restProps = _objectWithoutProperties(_ref3, ["isActiveTab", "children"]);

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
  };

  if (isActiveTab) {
    style.transition = "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";
    style.cursor = "default";
    style.opacity = 1;
  }

  return React.createElement("a", _extends({
    style: style
  }, restProps), children);
};

const TabsContainer = (_ref4) => {
  let {
    children
  } = _ref4,
      restProps = _objectWithoutProperties(_ref4, ["children"]);

  return React.createElement("div", _extends({
    style: {
      position: "relative",
      borderBottom: "1px solid #dfdfdf"
    }
  }, restProps), children);
};

const ReactTabs = (_ref5) => {
  let {
    children
  } = _ref5,
      restProps = _objectWithoutProperties(_ref5, ["children"]);

  return React.createElement("div", _extends({
    style: {
      position: "realative"
    }
  }, restProps), children);
};

class Tabs extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      tabsElements: []
    });
  }

  render() {
    return React.createElement(TabProvider, {
      activeTab: this.props.activeTab
    }, React.createElement(TabConsumer, null, value => React.createElement(ReactTabs, null, React.createElement(TabsContainer, null, React.createElement(ListTabs, null, value.context.tabs.map((tab, index) => React.createElement(TabTitleItem, {
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
      href: "javascript:void(0)",
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

_defineProperty(Tabs, "Tab", TabItem);

export default Tabs;
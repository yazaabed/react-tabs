var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import glamorous from "glamorous";

import * as TabsContext from "./TabsContext";
import Tab from "./Tab";

var ListTabs = glamorous.ul({
  paddingLeft: 0,
  listStyle: "none",
  margin: 0
});

var TabTitleItem = glamorous.li({
  display: "inline-block",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
});

var ActiveTabBorder = glamorous.div({
  height: 4,
  backgroundColor: "#0088dd",
  position: "absolute",
  bottom: 0,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  willChange: "left, width"
}, function (props) {
  return props.activeTabElement && {
    width: props.activeTabElement.offsetWidth,
    left: props.activeTabElement.offsetLeft
  };
});

var TabAnchorItem = glamorous.a({
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
}, function (props) {
  return props.isActiveTab && {
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    cursor: "default",
    opacity: 1
  };
});

var TabsContainer = glamorous.div({
  position: "relative",
  borderBottom: "1px solid #dfdfdf"
});

var ReactTabs = glamorous.div({
  position: "realative"
});

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tabsElements: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        TabsContext.TabProvider,
        { activeTab: this.props.activeTab },
        React.createElement(
          TabsContext.TabConsumer,
          null,
          function (value) {
            return React.createElement(
              ReactTabs,
              null,
              React.createElement(
                TabsContainer,
                null,
                React.createElement(
                  ListTabs,
                  null,
                  value.context.tabs.map(function (tab, index) {
                    return React.createElement(
                      TabTitleItem,
                      {
                        key: index,
                        id: tab.id,
                        innerRef: function innerRef(tabElement) {
                          if (!_this2.state.tabsElements[tab.id]) {
                            _this2.setState(function (prevState, props) {
                              var tabsElements = prevState.tabsElements;
                              tabsElements[tab.id] = tabElement;

                              return {
                                tabsElements: tabsElements
                              };
                            });
                          }
                        }
                      },
                      React.createElement(
                        TabAnchorItem,
                        {
                          isActiveTab: _this2.state.activeTab.id === tab.id,
                          href: "#",
                          onClick: _this2.onClick(tab),
                          onKeyPress: function onKeyPress(event) {
                            var code = event.keyCode || event.which;

                            if (code === 13) {
                              _this2.onClick(tab)(event);
                            }
                          }
                        },
                        tab.title
                      )
                    );
                  })
                ),
                React.createElement(ActiveTabBorder, {
                  activeTabElement: _this2.state.tabsElements[value.context.activeTab.id]
                })
              ),
              _this2.props.children
            );
          }
        )
      );
    }
  }]);

  return Tabs;
}(Component);

Tabs.Tab = Tab;


export default Tabs;
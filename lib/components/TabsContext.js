var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var TabsContext = React.createContext({
  prevActiveTab: {},
  activeTab: {}
});

var TabProvider = function (_React$Component) {
  _inherits(TabProvider, _React$Component);

  function TabProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabProvider.__proto__ || Object.getPrototypeOf(TabProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tabs: [],
      prevActiveTab: {},
      activeTab: _this.props.activeTab
    }, _this.addTab = function (newTab) {
      var isNewTabFound = void 0;

      for (var i in _this.state.tabs) {
        var tab = _this.state.tabs[i];

        if (tab.id === newTab.id) {
          isNewTabFound = true;
          break;
        }
      }

      if (!isNewTabFound) {
        _this.setState(function (prevState, props) {
          return {
            tabs: prevState.tabs.concat(newTab)
          };
        });
      }
    }, _this.removeTab = function (tabId) {
      _this.setState(function (prevState, props) {
        return {
          tabs: prevState.tabs.filter(function (tab) {
            return tab.id !== tabId;
          })
        };
      });
    }, _this.onClick = function (tab) {
      return function (event) {
        _this.setState(function (prevState, props) {
          return {
            prevActiveTab: prevState.activeTab,
            activeTab: tab
          };
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabProvider, [{
    key: "render",
    value: function render() {
      return React.createElement(
        TabsContext.Provider,
        {
          value: {
            context: Object.assign({}, this.state, {
              addTab: this.addTab,
              removeTab: this.removeTab,
              onClick: this.onClick
            })
          }
        },
        this.props.children
      );
    }
  }]);

  return TabProvider;
}(React.Component);

var TabConsumer = TabsContext.Consumer;

export { TabProvider, TabConsumer };
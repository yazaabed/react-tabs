# React Tabs
Simple React Tabs using the new react ContextAPI to manage changes active tabs or not. And there is no need to add tabs container you just add a tab component to handle everythings.

## Introduction
This project done using ReactJS and glamorous styling to add a simple tabs component to your project.

### Examples
```javascript
import React from "react";
import { Tabs } from "@yazanaabed/react-tabs";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Example1 = () => (
  <div style={styles}>
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Tab 1">
        <div style={{ padding: 10 }}>
          This is tab 1
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Tab 2">
        <div style={{ padding: 10 }}>
          This is tab 2
        </div>
      </Tabs.Tab>
    </Tabs>
  </div>
);
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Yazan Aabed**
* See also the list of [contributors](https://github.com/YazanAabeed/react-tabs/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This component to learn more about react
* I will add a unit tests for it ASAP

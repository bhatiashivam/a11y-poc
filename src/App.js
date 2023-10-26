import {
  Button,
  ComboBox,
  Input,
  Item,
  Label,
  ListBox,
  Popover
} from "react-aria-components";

import { names } from "./data";

import "./styles.css";

const App = () => {
  const items = names.map((name) => <Item key={name}>{name}</Item>);

  console.log("rendered");

  return (
    <div className="App">
      <span className="desc">{items.length} names</span>
      <ComboBox>
        <Label>Managers</Label>
        <div>
          <Input />
          <Button>▼</Button>
        </div>
        <Popover>
          <ListBox>{items}</ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default App;

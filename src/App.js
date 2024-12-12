import React, { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Heading } from "./components/Heading";
import { Tooltip } from "./components/Tooltip";
import { Accordion } from "./components/Accordion";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <div>
      <Button variant="bordered" size="lg">lg, primary</Button>
      <Button variant="bordered" size="md">md, primary</Button>
      <Button variant="bordered" size="sm">sm, primary</Button>
      <Button variant="bordered" size="md">Hover!</Button>

      <Button size="lg">lg, primary</Button>
      <Button size="md">md, primary</Button>
      <Button size="sm">sm, primary</Button>
      <Button size="md">Hover!</Button>

      <Input label="Name" placeholder="Dima bayke pishite" value={value1} onChange={(e) => setValue1(e.target.value)}/>
      <Input label="Name" placeholder="Dima bayke pishite" value={value2} onChange={(e) => setValue2(e.target.value)}/>
      <Input label="Name" placeholder="Dima bayke pishite" value={value3} onChange={(e) => setValue3(e.target.value)}/>

      <Typography textSize="sm" className="custom-text">SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      <Typography textSize="md" className="custom-text">MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      <Typography textSize="lg" className="custom-text">LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>

      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>

      <Tooltip text="I am a tooltip" position="top"><button>Tooltip top</button></Tooltip>
      <Tooltip text="I am a tooltip" position="bottom"><button>Tooltip bottom</button></Tooltip>
      <Tooltip text="I am a tooltip" position="left"><button>Tooltip left</button></Tooltip>
      <Tooltip text="I am a tooltip" position="right"><button>Tooltip right</button></Tooltip>

      <Accordion title="Accordion Expanded" defaultOpen>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
      <Accordion title="Accordion ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Accordion>
    </div>
  );
}

export default App;


// Было сложно, но я смог это сделать
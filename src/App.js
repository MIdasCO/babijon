import React, { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

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

      <div>
      <Input
        label="Name"
        placeholder="Ivan Ivanov"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Input
        label="Name"
        placeholder="Focus"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Input
        label="Name"
        placeholder="Danger"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
    </div>
    </div>
  );
}

export default App;

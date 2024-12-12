import { Button } from "./components/Button"

function App() {
  return(
    <div>
      <Button variant = "bordered" size="lg">lg, primary</Button> 
      <Button variant = "bordered" size="md">md, primary</Button> 
      <Button variant = "bordered" size="sm">sm, primary</Button> 
      <Button variant = "bordered" size="md">Hover!</Button> 

      <Button size="lg">lg, primary</Button> 
      <Button size="md">md, primary</Button> 
      <Button size="sm">sm, primary</Button> 
      <Button size="md">Hover!</Button> 

    </div>
  )
}

export default App;

import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  const exampleState = [
    {id: 1, name: 'Card1'},
    {id: 1, name: 'Card1'},
    {id: 1, name: 'Card1'},
    {id: 1, name: 'Card1'},
  ]

  return (
    <div className="App">
      <Header />
      <div className="">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="grid grid-cols-2 gap-2">
          {exampleState.map((item, i) => <Card key={i}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;

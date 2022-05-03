import { ListOfGifs } from "./components/ListOfGifs";
import { Home } from "./components/Home";
import { Route } from "wouter";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/" component={Home}/>
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
};

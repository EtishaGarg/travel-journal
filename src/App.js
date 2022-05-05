import './App.css';
import data from "./data.js";
import Card from "./components/Card.js";
import Header from "./components/Header.js";

function App() {
  const dataElement = data.map( data =>{
    return (
      <Card
        key= {data.id}
        title= {data.title}
        location= {data.location}
        map= {data.googleMapsUrl}
        description= {data.description}
        image= {data.imageUrl}
      />
    )}
  )
  return (
    <div className="App">
      <Header/>
      <section className = "card--list">
        {dataElement}
      </section>
    </div>
  );
}

export default App;

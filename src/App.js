import React, {useState, useEffect} from "react"
import './App.css';
import SearchBar from './components/search-bar/search-bar.components';
import AddButton from './components/add-button/add-button.component';



function App() {

  const [itemState, setItemState] = useState([]);

  useEffect (() => {
  fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(itemsArray=>{
                const newItemsState = itemsArray.map((item)=>{
                  return item.title
                })
                setItemState(newItemsState);
              })
  },[])


  const hasItems = itemState.length > 0
  return (
    <div className="App">
   
      {hasItems ? <SearchBar items = {itemState}/> : "Loading"}
      <AddButton incrementCount={5} />
    </div>
  );

}

export default App;


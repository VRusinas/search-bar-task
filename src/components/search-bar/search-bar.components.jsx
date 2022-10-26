import React, {useState} from 'react';
  
const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const handleImputChange = (event) => {
        setSearchValue(event.target.value)
    } 
    const handleClearSearch = () => {   
        setSearchValue("");
    }

    const shouldDisplayButton = searchValue.length > 0;

    const filteredItems = props.items.filter((item)=>{
      return item.includes(searchValue)
    })
  
    return (
    <div>
      <input type="text" value={searchValue} onChange={handleImputChange} />
      {shouldDisplayButton && <button onClick={handleClearSearch}>Clear</button>}

      {filteredItems.map((item) => {
          return (
            <div key={item}>{item}</div>
        )})}
    </div>
    );
}
  
export default SearchBar;
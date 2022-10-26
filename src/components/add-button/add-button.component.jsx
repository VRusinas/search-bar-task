import React, {useState} from 'react';
  
const AddButton = (props) => {

    const [addvalue, setAddValue] = useState(props.incrementCount)
    const handleAddValue = () =>{
        setAddValue(addvalue + props.incrementCount);
    }

    return (
    <div>
        <h1>Incriment by {addvalue}</h1>
        <button onClick={handleAddValue}>Click to add {props.incrementCount}</button>
    </div>
    );
}
  
export default AddButton;
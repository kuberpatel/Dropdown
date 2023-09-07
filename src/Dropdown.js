import { useState } from "react";

// Define the Dropdown component
const Dropdown = () => {
    // Define and initialize state variables
    const [isActive, setActive] = useState(false); // Dropdown activation state
    const [list] = useState(['Yes', 'Probably not']); // Dropdown options list
    const [value, setValue] = useState(''); // Selected dropdown value

    // Event handler for option click
    const onClickHandler = (e) => {
        setValue(e.target.textContent); // Set the selected value
        setActive(false); // Deactivate the dropdown
    }

    // Event handler for mouse hover
    const onMouseHover = () => {
        setActive(true); // Activate the dropdown on hover
    }

    // Create an array of option elements based on the list
    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandler} key={index}>{result}</a>;
    })

    // Render the Dropdown component
    return (
        <div className="dropdown">
            <h1>Should you use a dropdown?</h1>
            <h3>{value}</h3>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
                {results} {/* Render the option elements */}
            </div>
        </div>
    );
}

// Export the Dropdown component as the default export
export default Dropdown;

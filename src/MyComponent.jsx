import React, { useState } from "react";

function MyComponent() {
    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName = () => {
    //     const getName = document.getElementById("name");
    //     setName(getName.value);
    // };

    // const incrementAge = () => {
    //     setAge(age + 1);
    // };
    // const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    // };

    // const [name, setName] = useState("Guest");
    // const [quantity, setQuantity] = useState(0);
    // const [comment, setComment] = useState("");

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }

    // function handQuantityChange(e) {
    //     setQuantity(e.target.value);
    // }

    // function handleCommentChange(e) {
    //     setComment(e.target.value);
    // }

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    function handleYearChange(event) {
        setCar((car) => ({ ...car, year: event.target.value }));
    }
    function handleMakeChange(event) {
        setCar((car) => ({ ...car, make: event.target.value }));
    }
    function handleModelChange(event) {
        setCar((car) => ({ ...car, model: event.target.value }));
    }

    return (
        <div>
            <p>
                Your favorite car is: {car.year} {car.make} {car.model}
            </p>

            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.make} onChange={handleMakeChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
            {/* <div>
                <input value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>
                <input
                    value={quantity}
                    onChange={handQuantityChange}
                    type="number"
                />
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} />
                <p>{comment}</p>
            </div> */}

            {/* <input id="name"></input>
            {name != null ? <p>Name: {name}</p> : <p>Name: Guest</p>}
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button> */}
        </div>
    );
}

export default MyComponent;

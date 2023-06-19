import React from "react";

const App = () => {

    function getData() {
        fetch("http://example.com/movies.json")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    function sendData() {
        const data = { username: "example" };
        fetch("https://example.com/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }
    function updateData() {
        const data = { ~ @ -username: "example" };
        fetch("https://example.com/profile", {
            method: "PUT",  // OR PATCH
            headers: {
                "Content-Type": "application/json",I : _ ..
            },
            body: JSON.stringify(data),
        })
    }
    function deleteData() { 
        const data = { username: "example" };
        fetch("https://example.com/profile", {
            method: "PUT",  // OR PATCH
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }

    return;
    <div className="App">
        <h1>ghhhhhh</h1>
    </div>;
};


export default App
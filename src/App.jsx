import { useState } from "react";
import "./App.css";
import InformationForm from "./components/InformationForm";
import Resume from "./components/Resume";

function App() {
    const[generalInformation, setGeneralInformation] = useState({});

    const handleChange = function(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setGeneralInformation((fields) => ({
            ...fields,
            [fieldName]: fieldValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Array.prototype.forEach.call(event.target.elements, (element) => {            
            if(element.nodeName === 'INPUT'){
                setGeneralInformation(fields => ({
                    ...fields,
                    [element.name]: element.value,
                }));
            }
        });
    };

    return (
        <>
            <h1>CV Application</h1>
            <div id="body-wrapper">
                <InformationForm onChange={handleChange} onSubmit={handleSubmit}></InformationForm>
                <Resume generalInformation={generalInformation}></Resume>
            </div>
        </>
    );
}

export default App;

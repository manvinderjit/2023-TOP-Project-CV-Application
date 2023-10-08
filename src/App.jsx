import { useState } from "react";
import "./App.css";
import InformationForm from "./components/InformationForm";
import Resume from "./components/Resume";

function App() {
    const[generalInformation, setGeneralInformation] = useState({});
    const[educationalInformation, setEducationInformation] = useState([]);

    const handleChange = function (event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
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
    
    const resetInputFields = (event) => {
        Array.prototype.forEach.call(event.target.elements, (element) => {
            if (element.nodeName === "INPUT") {
                element.value = "";
            }
        });
    }

    const submitEducationDetails = (event) => {
        event.preventDefault();
        const educationData = {
            '_id':educationalInformation.length + 1,
            'institution_name': event.target.institution_name.value,
            'level_study': event.target.level_study.value,
            'specialization_study': event.target.specialization_study.value,
            'enrollment_year':event.target.enrollment_year.value,
            'graduation_year':event.target.graduation_year.value,
        }
        setEducationInformation(previousInformation => [...previousInformation, educationData]);   
        resetInputFields(event);
    }

    return (
        <>
            <h1>CV Application</h1>
            <div id="body-wrapper">
                <InformationForm
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitEducationDetails={submitEducationDetails}
                ></InformationForm>
                <Resume
                    generalInformation={generalInformation}
                    educationalInformation={educationalInformation}
                ></Resume>
            </div>
        </>
    );
}

export default App;

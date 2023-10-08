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
        // resetInputFields(event);
    };

    const addTemporaryUpdateButton = (id, formEducation) => {
        let updateButton;
        if (document.getElementsByName("update-data").length === 0) {
            updateButton = document.createElement("button");
            updateButton.setAttribute('type', 'button');
            updateButton.name = "update-data";
        } else {
            updateButton = document.getElementsByName("update-data")[0];
        }
        updateButton.id = id;
        updateButton.textContent = "Update";
        updateButton.onclick=handleUpdateInformation;
        formEducation.appendChild(updateButton);
    }

    const removeTemporaryUpdateButton = () => {
        const formEducation = document.getElementById("form-education");        
        formEducation.removeChild(document.getElementsByName("update-data")[0]);
    }

    const handleEditInformation = (event) => {
        const formEducation = document.getElementById('form-education');
        addTemporaryUpdateButton(event.target.id, formEducation);

        Array.prototype.forEach.call(formEducation.elements, (element) => {
            if (element.nodeName === "INPUT") {
                element.value = (educationalInformation[event.target.id - 1][element.id]);
            }
        });
    }

    const handleUpdateInformation = (event) => {

        const formEducation = document.getElementById("form-education");
        
        const educationData = {
            institution_name: formEducation.elements.institution_name.value,
            level_study: formEducation.elements.level_study.value,
            specialization_study: formEducation.elements.specialization_study.value,
            enrollment_year: formEducation.elements.enrollment_year.value,
            graduation_year: formEducation.elements.graduation_year.value,
        };

        setEducationInformation(
            educationalInformation.map((education) => {
                if (education._id == event.target.id) {
                    // Create a *new* object with changes
                    return {
                        ...education,
                        'institution_name': educationData.institution_name,
                        'level_study': educationData.level_study,
                        'specialization_study': educationData.specialization_study,
                        'enrollment_year': educationData.enrollment_year,
                        'graduation_year': educationData.graduation_year,
                    };
                } else {
                    // No changes
                    return education;
                }
            }),
        );  

        Array.prototype.forEach.call(formEducation.elements , (element) => {
            if (element.nodeName === "INPUT") {
                element.value = "";
            }
        });
        removeTemporaryUpdateButton();
    }
    
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
                    handleEditInformation={handleEditInformation}
                ></Resume>
            </div>
        </>
    );
}

export default App;

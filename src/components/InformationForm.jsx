import '../styles/InformationForm.css'
import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import ProfessionalExperience from "./ProfessionalExperience";

function InformationForm({onSubmit, onChange}) {

    return (
        <form onSubmit={onSubmit}>
            <GeneralInformation onChange={onChange}></GeneralInformation>
            {/* <EducationalExperience></EducationalExperience>
            <ProfessionalExperience></ProfessionalExperience> */}
            <div>
                <button type="submit">Generate Resume</button>
            </div>
        </form>
    );
}

export default InformationForm;

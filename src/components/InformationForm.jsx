import '../styles/InformationForm.css'
import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import ProfessionalExperience from "./ProfessionalExperience";

function InformationForm({ onSubmit, onChange, submitEducationDetails }) {
    return (
        <div className="forms-wrapper">
            <GeneralInformation
                onSubmit={onSubmit}
                onChange={onChange}
            ></GeneralInformation>
            <EducationalExperience
                submitEducationDetails={submitEducationDetails}
            ></EducationalExperience>
            {/* <ProfessionalExperience></ProfessionalExperience> */}
        </div>
    );
}

export default InformationForm;

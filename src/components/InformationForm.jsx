import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import ProfessionalExperience from "./ProfessionalExperience";

function InformationForm() {

    return (
        <form>
            <GeneralInformation></GeneralInformation>
            <EducationalExperience></EducationalExperience>
            <ProfessionalExperience></ProfessionalExperience>
        </form>
    )
}

export default InformationForm;

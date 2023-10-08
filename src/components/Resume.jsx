import '../styles/Resume.css'

function ShowGeneralInformationResume({ generalInformation = "" }) {
    return (
        <ul className="info-general">
            {Object.keys(generalInformation).map((field) => {
                if (generalInformation[field].trim() !== "") {
                    return (
                        <li key={field}>
                            <strong>
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                :
                            </strong>
                            <>{generalInformation[field]}</>
                        </li>
                    );
                }
            })}
        </ul>
    );
}

function ShowEducationalInformationResume({ educationalInformation = [] }) {    
    return(
        <div>
            {educationalInformation.map((information) => {
                return (
                    <ul key={information._id}>
                        <li key={information._id + "_id"}>
                            <strong>ID:</strong>
                            {information._id}
                        </li>
                        <li key={information._id + "_in"}>
                            <strong>Institution Name:</strong>
                            {information.institution_name}
                        </li>
                        <li key={information._id + "_ls"}>
                            <strong>Level of Study:</strong>
                            {information.level_study}
                        </li>
                        <li key={information._id + "_ss"}>
                            <strong>Specialization:</strong>
                            {information.specialization_study}
                        </li>
                        <li key={information._id + "_ey"}>
                            <strong>Enrollment Year:</strong>
                            {information.enrollment_year}
                        </li>
                        <li key={information._id + "_gy"}>
                            <strong>Graduation Year:</strong>
                            {information.graduation_year}
                        </li>
                        {/* {Object.keys(information).map((field) => {
                            return(
                                <li><strong>{field}: </strong>{information[field]}</li>
                            );
                            
                        })} */}
                    </ul>
                );
            })}
        </div>
    );
}

function Resume({
    generalInformation = "",
    educationalInformation = [],
}) {
    return (
        <div id="resume-wrapper">
            <h2>Resume</h2>
            <div>
                <h3>General Information</h3>
                <ShowGeneralInformationResume
                    generalInformation={generalInformation}
                ></ShowGeneralInformationResume>
                <h3>Education Experience</h3>
                <ShowEducationalInformationResume
                    educationalInformation={educationalInformation}
                ></ShowEducationalInformationResume>
            </div>
        </div>
    );
}

export default Resume;

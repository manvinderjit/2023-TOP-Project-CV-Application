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

function Resume({generalInformation = ""}) {
    return (
        <div id="resume-wrapper">
            <h2>Resume</h2>
            <div>
                <h3>General Information</h3>
                <ShowGeneralInformationResume
                    generalInformation={generalInformation}
                ></ShowGeneralInformationResume>
              
            </div>
        </div>
    );
}

export default Resume;

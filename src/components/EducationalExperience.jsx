import { useState } from "react";

function EducationDetails({ submitEducationDetails }) {
    return (
        <form onSubmit={submitEducationDetails}>
            <fieldset>
                <legend>Educational Experience</legend>
                <div>
                    <label htmlFor="institution_name">
                        School/ University:
                    </label>
                    <input
                        type="text"
                        id="institution_name"
                        name="institution_name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="level_study">Level of Study:</label>
                    <input
                        type="text"
                        id="level_study"
                        name="level_study"
                        required
                        placeholder="Degree, Diploma, Certificate etc."
                    />
                </div>
                <div>
                    <label htmlFor="specialization_study">
                        Specialization:
                    </label>
                    <input
                        type="text"
                        id="specialization_study"
                        name="specialization_study"
                        required
                        placeholder="Computer Science, Nursing"
                    />
                </div>
                <div>
                    <label htmlFor="enrollment_year">Enrollment Year:</label>
                    <input
                        type="date"
                        id="enrollment_year"
                        name="enrollment_year"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="graduation_year">Graduation Year:</label>
                    <input
                        type="date"
                        id="graduation_year"
                        name="graduation_year"
                        required
                    />
                </div>
            </fieldset>
            <button type="submit">
                Add More Detail
            </button>
        </form>
    );
}

function EducationalExperience({ submitEducationDetails }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id="education-experience">
            <h2>Education Experience</h2>
            <EducationDetails
                submitEducationDetails={submitEducationDetails}
            ></EducationDetails>
        </div>
    );
}

export default EducationalExperience;

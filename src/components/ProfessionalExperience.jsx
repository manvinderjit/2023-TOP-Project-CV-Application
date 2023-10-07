function ProfessionalExperience() {
    
    return (
        <fieldset>
            <legend>Professional Experience</legend>
            <div>
                <label htmlFor="company_name">Company Name:</label>
                <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                />
            </div>
            <div>
                <label htmlFor="postition_title">Position Title:</label>
                <input
                    type="text"
                    id="postition_title"
                    name="postition_title"
                    required
                    placeholder="Junior Developer, Intern, etc."
                />
            </div>
            <div>
                <label htmlFor="job_responsibilities">
                    Job Responsibilites:
                </label>
                <input
                    type="textarea"
                    id="job_responsibilities"
                    name="job_responsibilities"
                    required
                    placeholder="Customer Service, Lead Generation"
                />
            </div>
            <div>
                <label htmlFor="start_date">Start Date:</label>
                <input type="date" id="start_date" name="start_date" required />
            </div>
            <div>
                <label htmlFor="end_date">End Date:</label>
                <input type="date" id="end_date" name="end_date" />
            </div>
        </fieldset>
    );
}

export default ProfessionalExperience;

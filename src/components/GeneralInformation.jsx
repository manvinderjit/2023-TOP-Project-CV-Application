import '../styles/GeneralInformation.css';
function GeneralInformation({ onChange }) {
    return (
        <fieldset>
            <legend>General Information</legend>
            <div>
                <label htmlFor="firstname">Firstname:</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="lastname">Lastname:</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" onChange={onChange} />
            </div>
        </fieldset>
    );
}

export default GeneralInformation;

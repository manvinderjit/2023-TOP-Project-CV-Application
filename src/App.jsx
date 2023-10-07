import "./App.css";
import InformationForm from "./components/InformationForm";
import Resume from "./components/Resume";

function App() {

    return (
        <>
            <h1>CV Application</h1>
            <div id="body-wrapper">
                <InformationForm></InformationForm>
                <Resume></Resume>
            </div>
        </>
    );
}

export default App;

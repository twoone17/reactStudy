import './App.css';
import Hello from './component/Hello';
import Welcome from "./component/Welcome";

function App() {
    const name = "Tom";
    const naver = {
        name: "네이버",
        url: "https://naver.com",
    }
    return (
        <div className="App">
            <Hello/>
            <Hello/>
            <Hello/>
            <Welcome/>

        </div>
    );
}

export default App;

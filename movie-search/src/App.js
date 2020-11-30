import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
    return ( <
        Provider store = { store } >
        <
        div className = "App" >
        <
        header className = "App-header" >
        <
        p >
        Welcome to Movie Search App <
        /p>

        <
        /header> <
        /div> <
        /Provider>
    );
}

export default App;
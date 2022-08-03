import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from  './components/App';
ReactDOM.render(<App/>, document.getElementById('root'))
=======
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hiii From React</h1>
            <h2>Developer Funnel</h2>
            <Footer/>
        </div>
    )
}
const container =  document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)
///ReactDOM.render(<App/>, document.getElementById('root'))
>>>>>>> 91d626b46bcfe99b1bc157671fb34b3dcab23113

import { useRef } from 'react'
import './App.css';
import Header from './components/header';
import MainPage from './components/mainPage';
import Footer from './components/footer';

function App() {

  const theme = useRef(null)
  // useEffect(() => {
  const toggleTheme1 = (value) => {
    console.log(theme.current)
    if (value) {
      // ['theme-dark', 'theme-light'].forEach(e => { theme.current.classList.toggle(e) })
      // theme.current.classList.add = 
      theme.current.classList.remove('theme-light')
      theme.current.classList.add('theme-dark')
    } else {
      theme.current.classList.add('theme-light')
      theme.current.classList.remove('theme-dark')
    }
  }
  // }, [])


  return (
    <div className="App">
      <div className='theme-dark' ref={theme}>
        <Header toggleTheme={toggleTheme1} />
        <MainPage />
        <Footer />

        {/* <div className="d-flex justify-content-center" style={{ border: "solid 1px #191d28", backgroundColor: '#191d28', position: "fixed", left: '0', alignItems: 'center', width: '100vw', height: '47px', bottom: '0', zIndex: '8' }}>
          <button className="add-button btn btn-outline-info" style={{ display: "block" }}>Add hodlinfo to home screen</button>
        </div> */}
      </div>
    </div>
  );
}

export default App;

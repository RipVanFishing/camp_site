import Header from './components/Header'
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className='container'>
      <div className='hero_wrap'>
        <Header />
        <HeroSection />
        </div>
      
    </div>
  );
}

export default App;

import './App.css'
import MainFooter from './components/MainFooter/MainFooter';
import MainHeader from './components/MainHeader/MainHeader';
import MainMain from './components/MainMain/MainMain';

const App = ()=>{
  return (
    <div className='wrapper'>
    <MainHeader/>
        <MainMain/>
        <section></section>
        <section></section>
    <MainFooter/>
    </div>
  );
}

export default App;


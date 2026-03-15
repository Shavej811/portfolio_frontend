import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import NavigationManager from './NavigationManager';
import Footer from '../components/Footer';


function InitializeDefault() {
  return (
    <BrowserRouter>
      <Header/>
      <NavigationManager />
      <Footer/>
    </BrowserRouter>
  );
}

export default InitializeDefault;
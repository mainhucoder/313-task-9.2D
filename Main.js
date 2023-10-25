import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import PageImage from './PageImage';
import NewNavbar from './NewNavbar';
import Footer from './Footer';
import ArticlePic from './ArticlePic';
import TutorialPic from './TutorialPic';

function Main() {
  return (
   <>
   <Navbar/>
   <PageImage/>
   <ArticlePic/>
   <TutorialPic/>
   <NewNavbar/>
   <Footer/>
   </>
  );
}

export default Main;
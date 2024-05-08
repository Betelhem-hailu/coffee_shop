import './App.css';
import { Navbar } from './components';
import { AboutUs, Blog, Book, Cla, Footer, Header, Menus, News, Products, Testmony } from './container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menus />
      <Products />
      <Cla />
      <Testmony />
      <Book />
      <Blog />
      <News />
      <Footer />
    </div>
  );
}

export default App;

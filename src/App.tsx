import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import NavbarWithSubtabs from './components/NavBarWithSubtabs';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarWithSubtabs />
      <HomePage />
      {/* <Calendar /> */}
    </div>
  );
}

export default App;

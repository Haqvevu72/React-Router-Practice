import { Route , Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { NavBar } from './Components/NavBar';
import { OrderSummary } from './Components/OrderSummary';
import { NoMatch } from './Components/NoMatch';
import { Products } from './Components/Products';
import { Featured } from './Components/Featured';
import { New } from './Components/New';
import { Users } from './Components/Users'
import { UserDetail } from './Components/UserDetail';
import './App.css';
import { Admin } from './Components/Admin';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path = '/' element = { <Home/> }></Route>
        <Route path = '/about' element = { <About/> }></Route>
        <Route path = '/order-summary' element = { <OrderSummary/> }></Route>
        <Route path = '/products' element = {<Products/>}>
          <Route index element = { <Featured/> }></Route>
          <Route path = 'featured' element = { <Featured/> }></Route>
          <Route path = 'new' element = { <New/> }></Route>
        </Route>
        <Route path = '/users' element = { <Users/> }>
          <Route path = ':userId' element = { <UserDetail/> }></Route>
          <Route path = 'admin' element = { <Admin/> }></Route>
        </Route>
        <Route path = '*' element = { <NoMatch/> }></Route>
      </Routes>
    </div>
  );
}

export default App;

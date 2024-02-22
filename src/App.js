import React from 'react';
import './Addingcss.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashborad from './component/Dashborad';
import Inventory from './component/Inventory';
import Todos from './component/Todos';
import Shipping from './component/Shipping';
import Channel from './component/Channel';

const App = () => {
  return (
    <div className="d-flex">
      <BrowserRouter>
        <div className="col-auto">
          <Navbar />
        </div>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Dashborad />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/todo" element={<Todos />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/channel" element={<Channel />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar'
// import Dashboard from './component/Dashborad'
// import Inventory from './component/Inventory';
// import Todos from './component/Todos'
// import Shipping from './component/Shipping'
// import Channel from './component/Channel'

// const App = () => {
//   return (
//     <BrowserRouter>
    
//       <div className="container">
//         <Navbar /> {/* Render the Navbar component */}
//         <Routes>
        
//           <Route exact path="/" component={Dashboard} />
//           <Route path="/inventory" component={Inventory} />
//           <Route path="/todo" component={<Todos/>} />
//           <Route path="/shipping" component={Shipping} />
//           <Route path="/channel" component={Channel} />
          
//           </Routes>
//       </div>
//       </BrowserRouter>
  
//   );
// }

// export default App;


import { Link } from 'react-router-dom';
import { SidebarData } from './SlidebarData';
 import './Navbar.css';


function Navbar() {
  return (
    <>
    <div>
      
      </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          
    
    </>
  );
}

export default Navbar;

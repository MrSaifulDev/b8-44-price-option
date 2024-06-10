
import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";



const NavBar = () => {

const [open, setOpen] = useState(false)

  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
      description:
        "This route represents the homepage of the application where users land when they first visit.",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
      description:
        "This route displays information about the application, its purpose, and possibly information about the development team.",
    },
    {
      id: 3,
      path: "/products",
      name: "Products",
      description:
        "This route lists all the products available in the application. It could be a catalog page where users can browse and filter products.",
    },
    {
      id: 4,
      path: "/products/:id",
      name: "ProductDetail",
      description:
        "This route shows detailed information about a specific product identified by its `id`. Users might land here when they click on a product from the catalog.",
    },
    {
      id: 5,
      path: "/contact",
      name: "Contact",
      description:
        "This route provides a form or contact information for users to get in touch with the application's administrators or support team.",
    },
  ];


  return (
    <nav className="bg-yellow-200 p-3"> 
      


      <div className="text-2xl md:hidden"  onClick={() => setOpen(!open)}>
        {
          open == true ? <HiMenuAlt1 /> : <IoMdClose />
          
        }
        
      </div>

      <ul className={`
        
        md:flex  duration-2000 absolute md:static
        ${open ? 'top-13' : '-top-60'}
        bg-yellow-200 px-6 
        `        
        }>
          
        {
            routes.map(route => <Link key={route.id} route={route}> </Link> )
        }
      </ul>
    </nav>
  );
};

export default NavBar;

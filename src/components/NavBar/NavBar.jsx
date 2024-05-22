const NavBar = () => {
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
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
          <li key={route.id} className="mr-3">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

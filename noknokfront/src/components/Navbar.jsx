import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,ChartBarIcon
} from "@heroicons/react/24/solid";
import Logo from "./Logo";
import axios from "axios";
import { useNavigate } from "react-router";

const navListMenuItems = [
  {
    title: "Categories",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    link:"/categories"
  },
  {
    title: "Hired",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link:"/hired"
  },
  {
    title: "Report",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link:"/report"
  },
 
];
 

const navListMenuItemsProvider = [
  {
    title: "Create a Service",
    description: "Create a new service",
    icon: SquaresPlusIcon,
    link:"/service/add"
  },
  {
    title: "All Services",
    description: "Get all services",
    icon: UserGroupIcon, link:"/service/all"

  },
  {
    title: "Tasks",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link:"/provided"
  },

];
const navListMenuItemsAdmin = [
  {
    title: "Create a Service",
    description: "Create a new service",
    icon: SquaresPlusIcon,
    link:"/category/add"
  },
  {
    title: "All Ctegories",
    description: "Get all Categories",
    icon: UserGroupIcon, link:"/categories/all"

  },
  {
    title: "Reports",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },

];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
const user=JSON.parse(localStorage.getItem('user'))
let ListItems=navListMenuItems
if(user){
  if(user.Role==='provider'){
    ListItems=navListMenuItemsProvider
  }
  if(user.Role==='Admin'){
    ListItems=navListMenuItemsAdmin
  }
}

 const renderItems =  ListItems.map(
    ({ link="#",icon, title, description }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/contact"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact US
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Why US?
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function NavbarWithMegaMenu() {
  const navigate=useNavigate()
  const isLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user; 
  };
    
    const handleLogout = async() =>{
      console.log("clicked");
      try {
        await axios.post('http://localhost:8800/api/auth/logout');
    
        localStorage.removeItem('user');
    
        // Redirect to the login page or homepage
        navigate('/login');
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto   py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
    <Logo/>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {isLoggedIn() ? (
            <>
            <div className="flex items-center gap-8">
              <a href="/Conversations">
             <Badge >
        <IconButton>
          <EnvelopeIcon className="h-4 w-4" />
        </IconButton>
      </Badge>
      </a>
              <span className="text-sm text-blue-gray-500 mr-2">
                <a href="/profile">
                {JSON.parse(localStorage.getItem('user')).username}
                </a>
              </span>
              <Button variant="text" size="sm" color="blue" onClick={handleLogout}>
                Logout
              </Button>
              </div>
            </>
          ) : (
            <>
            <a href="/login">
              <Button variant="text" size="sm" color="blue">
                Log In
              </Button>
              </a>
              <a href="/signup">
              <Button variant="gradient" className="bg-black text-white" size="sm">
                Sign In
              </Button>
              </a>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
        <a href="/login">
              <Button variant="text" size="sm" color="blue">
                Log In
              </Button>
              </a>
              <a href="/signup">
              <Button variant="gradient" className="bg-black text-white" size="sm">
                Sign In
              </Button>
              </a>
        </div>
      </Collapse>
    </Navbar>
  );
}
import { Typography } from "@material-tailwind/react";
import Logo from "./Logo";
 
export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8 mt-16">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
<Logo/>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 list-none">
          <li>
            <Typography
              as="a"
              href="/aboutus"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
      
       
          <li>
            <Typography
              as="a"
              href="/contactus"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}
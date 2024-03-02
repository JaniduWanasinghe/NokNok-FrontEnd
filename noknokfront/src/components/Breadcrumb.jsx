import { Breadcrumbs } from "@material-tailwind/react";
 
export function Breadcrumbs({currentPath}) {
  return (
    <Breadcrumbs>

      <a href="#" className="opacity-60">
        Home
      </a>
      <a href="#" className="opacity-60">
        Components
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  );
}
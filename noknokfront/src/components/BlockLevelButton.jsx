import { Button } from "@material-tailwind/react";

export function BlockLevelButton( {text,handleopen}) {
  return <Button fullWidth onClick={handleopen} >{text}</Button>;
}

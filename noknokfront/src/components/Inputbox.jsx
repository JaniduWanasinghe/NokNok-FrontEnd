import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function InputWithButton({ label, btntext }) {
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  const onChange = ({ target }) => setName(target.value);

  const handleButtonClick = () => {
    // Navigate to the search page with the provided search query
    if (name) {
      navigate(`/services/search/${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className={`relative flex w-full max-w-[32rem] mt-12`}>
      <Input
        type="text"
        label={label}
        value={name}
        color="purple"
        onChange={onChange}
        className="pr-20 border-purple-800 min-h-12 bg-white p-10"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        disabled={!name}
        onClick={handleButtonClick}
        className={`!absolute right-1 top-1 bottom-1 rounded ${
          name ? "bg-blue-600" : "bg-deep-purple-300"
        } `}
      >
        {btntext}
      </Button>
    </div>
  );
}

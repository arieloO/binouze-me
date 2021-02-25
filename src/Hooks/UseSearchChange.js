import { useState } from "react";

export const useSearchChange = () => {
  const [searchFields, setSearchFields] = useState({});

  const handleSearchValues = (e) => {
    if (e.currentTarget.value === searchFields[e.currentTarget.name]) {
      setSearchFields({
        ...searchFields,
        [e.currentTarget.name]: "",
      });
    } else {
      setSearchFields({
        ...searchFields,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  return [searchFields, handleSearchValues];
};

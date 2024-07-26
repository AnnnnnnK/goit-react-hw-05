import { useState } from "react";

export const Form = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchQuery) handleSubmit(searchQuery);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="search"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

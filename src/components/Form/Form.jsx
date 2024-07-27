import { useState } from "react";
import { form, input, button } from "./Form.module.css";

export const Form = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchQuery) handleSubmit(searchQuery);
  };

  const handleChange = ({ target: { value } }) => {
    // if (!value) setSearchQuery("");
    setSearchQuery(value);
  };

  return (
    <form onSubmit={handleSubmitForm} className={form}>
      <input
        className={input}
        type="text"
        name="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search your favourite film"
      />
      <button type="submit" className={button}>
        Search
      </button>
    </form>
  );
};

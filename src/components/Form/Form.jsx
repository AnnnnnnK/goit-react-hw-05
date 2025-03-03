import { useState } from "react";
import { form, input, button } from "./Form.module.css";

export const Form = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchQuery) handleSubmit(searchQuery);
    else alert("Please, enter your request");
  };

  const handleChange = ({ target: { value } }) => {
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

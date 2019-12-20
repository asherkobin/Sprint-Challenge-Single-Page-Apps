import React, { useState } from "react";

export default function SearchForm({ setSearchFilter }) {

  const handleSubmit = e => {
    e.preventDefault();

    setSearchFilter("?name=" + document.getElementById("name").value);
  };
 
  return (
    <section className="search-form" style={ {textAlign: "center", marginTop: "20px"} }>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Search" />
      </form>
    </section>
  );
}

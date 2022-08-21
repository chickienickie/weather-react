import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Header">
      <form className="Search">
        <input type="search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

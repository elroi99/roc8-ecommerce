import React from "react";
import { TextField } from "@mui/material";

export function SearchBar(props) {
  let { searchQuery, setSearchQuery } = props;
  return (
    <TextField
      id='outlined-basic'
      label='Search products......'
      variant='outlined'
      autoComplete={false}
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  );
}

import React from "react";
import styled from "styled-components";

const ScDiv = styled.div`
  background-color: black;
  display: block;
  text-align: center;
`;
const Scİnput = styled.input`
  background-color: darkgrEY;
  color: black;
`;

const Search = (props) => {
  const { tarih, changeHandler } = props;

  return (
    <ScDiv>
      <Scİnput
        value={tarih}
        onChange={(e) => changeHandler(e.target.value)}
        name="date"
        type="date"
      />
    </ScDiv>
  );
};

export default Search;

import React from "react";
import styled from "styled-components";

const ScHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.911);
  display: flex;
  justify-content: space-around;
  color: white;
`;

const ScYazı = styled.p`
  margin-top: 1%;
  vertical-align: middle;
  font-size: 1.5rem;
  color: white;
`;

const ScLogo = styled.img`
  margin-top: 7px;
  width: 50px;
  height: 50px;
`;

function Header() {
  return (
    <ScHeader>
      <ScLogo
        className="nasalogo"
        src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        alt="nasa logo"
      />
      <ScYazı>Astronomy Photos</ScYazı>
    </ScHeader>
  );
}
export default Header;

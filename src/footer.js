import React from "react";
import styled from "styled-components";

const ScFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: black;
`;
const ScImg = styled.img`
  width: 100px;
  height: 100px;
`;

function Footer() {
  return (
    <ScFooter>
      <ScImg
        src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        alt="nasa logo"
      />
    </ScFooter>
  );
}
export default Footer;

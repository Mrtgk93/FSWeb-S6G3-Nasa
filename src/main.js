import React from "react";
import styled from "styled-components";

const ScImg = styled.img`
  padding: 1rem;
  height: 70vh;
  width: 45vw;
`;
const ScMain = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0);
  color: white;
`;
const Sch3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0%;
`;

function Main(props) {
  const { data } = props;

  return (
    <ScMain>
      <div>
        <Sch3 className="title">{data.title}</Sch3>
      </div>
      <div>
        <ScImg src={data.url} alt="nasa picture" />
      </div>
      <div>
        <h3 className="fotoyuceken">{data.copyright}</h3>
      </div>
    </ScMain>
  );
}

export default Main;

import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";

const ScReactScript = styled.div`
  padding-top: 1rem;
  background-color: black;
  display: block;
  text-align: center;
`;
const ScCardbody = styled.div`
  background-color: black;
  color: white;
  padding: 0px;
`;

function Togle(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ScReactScript>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Explanation
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>
            <ScCardbody>
              <div> {args.date}</div>
              <div>{args.explanation}</div>
            </ScCardbody>
          </CardBody>
        </Card>
      </Collapse>
    </ScReactScript>
  );
}

export default Togle;

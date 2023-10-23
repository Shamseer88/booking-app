import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
text-align = center
`;

const Img = styled.img`
  height: 5.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img
        src="https://seeklogo.com/images/B/booking-logo-937C69F36E-seeklogo.com.png"
        alt="logo"
      />
    </StyledLogo>
  );
}

export default Logo;

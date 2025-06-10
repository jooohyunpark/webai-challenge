import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 400 / 538;
  object-fit: cover;
`;

const Image = ({ src, alt, ...props }) => {
  return <StyledImage src={src} alt={alt} {...props} />;
};

export default Image;

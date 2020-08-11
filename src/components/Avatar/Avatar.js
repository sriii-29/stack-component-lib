import React from "react";
import { StyledAvatar, StyledAvatarText } from './Avatar.styled';

const Avatar = (props) => {
  const { size, src, alt, title, subTitle } = props;
  return (
    <StyledAvatarText>
      <StyledAvatar size={size} src={src} alt={alt} >
      </StyledAvatar>
      <h4>{title} </h4>
     <p>{subTitle}</p>
    </StyledAvatarText>
  );
}

export default Avatar;
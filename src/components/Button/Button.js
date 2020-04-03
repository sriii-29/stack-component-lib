import React from "react";
import StyledButton from "./Button.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) =>{
    const {btnType, isDisabled, btnVariant, rounded, children, size, block, icon,iconVariant} = props;
    return(
        <StyledButton rounded={rounded} color={btnType} disabled={isDisabled} variant={btnVariant} size={size} block={block}>
            {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
            {/* <FontAwesomeIcon icon={['far', 'heart']} /> */}
            {icon && iconVariant==='regular' ? <FontAwesomeIcon icon={['far',icon]} /> : iconVariant==='solid' ? <FontAwesomeIcon icon={['fas',icon]} /> : <FontAwesomeIcon icon={['fas',icon]} spin/> }
            {children}
        </StyledButton>
    );
}

export default Button;
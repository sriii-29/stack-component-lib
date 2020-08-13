import React from "react";
import {StyledBox} from "./Box.styled";

const Box = (props) =>{
    const {children, justifyItems, justifyContent, alignItems,
        display, p, m, pt, pm, pl, pr, mr, ml, mp, mb, border,
        borderRight, borderLeft, borderTop, borderBottom, borderRadius, bgColor, opacity,
     } = props;
    return(
        <StyledBox justifyItems={justifyItems} justifyContent={justifyContent} alignItems={alignItems} {...props}>
            {children}
        </StyledBox>
    );
}

export default Box;
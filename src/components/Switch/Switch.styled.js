import styled, {css} from "styled-components";

 const StyledSwitch = styled.div`

.switch {
    position: relative;
    display: inline-block;
    width: 37px;
    height: 20px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 2px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #5089de;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #5089de;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }

  ${props =>     
    props.size === "sm"
    ? css`
    `
    :
    props.size === "lg"
    ? css `
     
    `
    : css`
    `
}

  `

  export default StyledSwitch;
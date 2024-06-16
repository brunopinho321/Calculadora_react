import { ButtonContainer } from "./button_styles";

const Button = (props) =>{
    
    return(
        <ButtonContainer onClick={props.onClick}>
            {props.label}
        </ButtonContainer>
    );
}

export default Button;
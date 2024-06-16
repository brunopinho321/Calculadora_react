import { InputContainer } from "./input_styles";
const Input = (props) =>{
    return(
        <InputContainer>
            <input disabled value={props.value}/>
        </InputContainer>
    );
}

export default Input; 
import React, {useState} from 'react';
import Card from "../../UI/Card/Card";
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from "./ProductInput.module.css";


const ProductInput = props => {
    const [nameValue, setNameValue] = useState('');
    const [weightValue, setWeightValue] = useState(0.0);
    const [isValid, setIsValid] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(nameValue.length === 0 || weightValue.length === 0){
            setIsValid(false);
            return;
        }
        props.onAddProduct(nameValue, weightValue);
    }

    const nameInputHandler = event => {
        if(event.target.value.trim().length > 0 && weightValue.length > 0){
            setIsValid(true);
        }
        setNameValue(event.target.value);
    };

    const weightInputHandler = event => {
        if(nameValue.length > 0 && event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setWeightValue(event.target.value);
    };

    return(
        <Card className={classes.login}>
        <form onSubmit={formSubmitHandler}>
            <Input
            label="Name"
            type="text"
            name="name"
            value={nameValue}
            onChange={nameInputHandler}
            placeholder="Material"
            />
            <Input
            label="Weight"
            type="number"
            step="0.1"
            name="weight"
            value={weightValue}
            onChange={weightInputHandler}
            placeholder="Peso"
            />
            <Button onClick={props.onCancel}>Cancel</Button>
            <Button disabled={!isValid} type="submit">
                Accept Changes
            </Button>
        </form>
        </Card>
    );
};
export default ProductInput;
import React from 'react';

import { Label, Input } from 'reactstrap';
import Button from '../../../common/Button/Button';
import Alert from '../../../common/Alert/Alert';

//import './CheckDiscountCode.scss';

class TotalPrice extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            isDiscountCorrect: true,
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = () => {
        const { handleAddDiscount, discountStatus } = this.props;
        const discountCode = 'mountain';

        if(discountStatus === false) {
            if(discountCode === this.state.input) {
                handleAddDiscount();
            } else {
                this.setState({
                    isDiscountCorrect: false
                })
            }
        }        
    }

    render() {
        
        const { input, isDiscountCorrect } = this.state;
        const { discountStatus } = this.props;
        const { handleChange, handleSubmit } = this;        

        if(discountStatus === false && isDiscountCorrect === true) {
            return(
                <div className='discount-code'>
                    <Label>Type code 'mountain' below and get 10% discount</Label>
                    <div className='discount-code-input'>
                        <Input placeholder='discount code' type='text' input={ input } onChange={ handleChange }></Input>
                        <Button variant='primary' onClick={ handleSubmit }>Continue</Button>
                    </div>
                </div>
            );

        } else if (discountStatus === false  && isDiscountCorrect === false) {
            return(
                <Alert variant='error'>Wrong code!</Alert>
            );

        } else if (discountStatus === true) {
            return(
                <Alert variant='success'>The code is active</Alert>
            );
        } else {
            return <Alert variant='error'>Something goes wrong!</Alert>
        }
        
    }
}

export default TotalPrice;
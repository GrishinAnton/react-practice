import React from 'react';
import 'css/formValidation.css';


export default class AddComments extends React.Component {

    state = {
        inputValue: '',
        inputName: '',
        errorValidInput: '',
        errorValidName: ''
    }

    onChangeName = ev => {
        if(ev.target.value.length < 5 || ev.target.value.length > 15){
            this.setState({errorValidName: 'error'})
        } else {
            this.setState({errorValidName: ''})
        }
        this.setState({inputValue: ev.target.value})
    }

    onChangeValue = ev => {
        if(ev.target.value.length < 20 || ev.target.value.length > 50){
            this.setState({errorValidInput: 'error'})
        } else {
            this.setState({errorValidInput: ''})
        }
        this.setState({inputName: ev.target.value})
    }

    render() {

        return (
            <div>
                <input type="text" className={this.state.errorValidName} placeholder="Введите Ваше имя" value={this.inputName} onChange={this.onChangeName} /><br />
                <input type="text" className={this.state.errorValidInput} placeholder="Введите комментарий" value={this.inputValue} onChange={this.onChangeValue} />
            </div>
        )        
    }    

}
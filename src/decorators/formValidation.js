import React from 'react'
import 'css/formValidation.css'

export default (OriginalComponent) => class FormValidation extends React.Component {
    state = {
        inputValue: '',
        inputName: '',
        errorValidInput: '',
        errorValidName: ''
    }

    onChangeName = ev => {
        if(ev.target.value.length < 20 || ev.target.value.length > 50){
            this.setState({errorValidName: 'error'})
        } else {
            this.setState({errorValidName: ''})
        }
        this.setState({inputValue: ev.target.value})
    }

    onChangeValue = ev => {
        console.log('value')
        if(ev.target.value.length < 5 || ev.target.value.length > 15){
            this.setState({errorValidInput: 'error'})
        } else {
            this.setState({errorValidInput: ''})
        }
        this.setState({inputName: ev.target.value})
    }

    render() {

        return (

            <OriginalComponent 
                {...this.props}
                inputValue={this.state.inputValue}
                inputName={this.state.inputName}
                errorValidInput={this.state.errorValidInput}
                errorValidName={this.state.errorValidName}
                onChangeName = {this.onChangeName}
                onChangeValue = {this.onChangeValue}
            />
        )
    }
}
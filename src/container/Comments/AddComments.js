import React from 'react';
import 'css/formValidation.css';


export default class AddComments extends React.Component {

    state = {
        name: '',
        value: ''
    }

    onChange = type => ev => {    
        if(ev.target.value.length > limit[type].max) return
        this.setState({[type]: ev.target.value})
    }

    getValidClass = type => this.state[type].length < limit[type].min || this.state[type].length > limit[type].max ? 'error' : ''

    render() {

        return (
            <div>
                <input type="text" className={this.getValidClass('name')} placeholder="Введите Ваше имя" value={this.state.name} onChange={this.onChange('name')} /><br />
                <input type="text" className={this.getValidClass('value')} placeholder="Введите комментарий" value={this.state.value} onChange={this.onChange('value')} />
            </div>
        )        
    }  
}

const limit = {
    name: {
        min: 5,
        max: 15
    },
    value: {
        min: 20,
        max: 50
    }
}
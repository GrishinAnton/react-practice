import React from 'react';

export default (OriginalComponent) => class Accordion extends React.Component {

    state = {
        id: null
    }

    toggleOpenArticle = id => ev => {    
        this.setState({ id: id === this.state.id ? null : id })
    }  

    render() {

        return (

            <OriginalComponent 
                {...this.props} 
                id = {this.state.id} 
                toggleOpenArticle = {this.toggleOpenArticle}
            />
        ) 
    }
}
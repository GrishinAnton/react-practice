import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {

    state = {
        id: null
    }

    toggleOpenArticle = id => ev => {

        if (id === this.state.id){
            return this.setState({ id: null })
        }        
        this.setState({ id })
    }  

    render() {

        return (

            <OriginalComponent 
                {...this.props} 
                id={this.state.id} 
                toggleOpenArticle={this.toggleOpenArticle}
            />
        ) 
    }
}
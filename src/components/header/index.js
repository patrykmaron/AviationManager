/* 
* Header Component
* Pure 
*/
import React from 'react';
import EarthComponent from '../earth';
import IntroTitle from '../IntroTitle';
import Main from '../Main';


export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Title: props.Title,
            Subtitle: props.Subtitle,
            Scrolled: false,
        }; 
    }  

    _handleScroll = (ev) => {
        const scrollY = ev.target.scrollTop;
        if(scrollY > 40){
            this.setState({Scrolled: true})
        }
    }
 

    render(){
        return (
            <div>
                <header onScroll={this._handleScroll} className={this.state.Scrolled ? "headerSmall" : "none"}>
                    <IntroTitle 
                        Title = {this.state.Title}
                        Subtitle = {this.state.Subtitle}
                        Visible = {this.state.Scrolled}
                    />
                    <EarthComponent
                        Size={this.state.Scrolled}
                    />
                </header>
                <Main
                    Visible = {this.state.Scrolled}
                />
            </div>
            
        )
    }
    
}

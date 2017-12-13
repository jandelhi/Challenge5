import React , {Component} from 'react';

class CallToAction extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(){
        alert("You are subscribed! You will now receive daily notifications.");
    }

    render(){
        return(
            <div>
            <p>Stay up to date on the weather. Subscribe to our daily notifications so you always know when it's raining,
                snowing, or sunny enough for a walk in the park! </p>
                <br/>
                <button onClick={this.handleClick}>
                Yes, let me know the weather every day</button>
            </div>
        )
    }
}

export default CallToAction;
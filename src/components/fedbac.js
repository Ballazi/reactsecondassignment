import {Component} from 'react';
import './fedbac.css';

export class Feedback extends Component
{
    render(){
        
        return(
            <div className="output">
                {this.props.entery.map((item)=>{
                    return(
                        <p key={item.id} className="p">Name : {item.name} | Department : {item.department} | Rating : {item.rating}</p>
                    )
                })}
            </div>
        );
    }
}

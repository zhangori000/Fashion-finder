import React from 'react';
import 'tachyons';

//src={`https://robohash.org/${props.id}?200x200`}
//src={`https://source.unsplash.com/200x200/?${props.id}`}
//
const Card = (props) => {
    return [
        
        <div key={props.id} className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='something' src={`https://source.unsplash.com/200x200/?clothing,men,${props.id}`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    ];
        
}
    
 

export default Card;
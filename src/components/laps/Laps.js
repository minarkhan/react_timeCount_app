import React from 'react';

const Laps = (props) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
                { props.laps.map( (lap, i) => {
                    return (
                        <li key={i} className="list-group-item">
                            <h3>
                            Min: <span className="text-danger">{lap.min}</span> 
                            Sec: <span className="text-danger">{lap.sec}</span> 
                            Mili: <span className="text-danger">{lap.mili}</span> 
                            </h3>
                        </li>
                    )
                })}
                
                
            </ul>
        </div>
    )
}
export default Laps;

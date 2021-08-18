import React, {Component} from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CustomCircularProgressBar.css';

export default class CustomCircularProgressbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { score, needRecommendations } = this.props;
        let minValue = 0, maxValue = 1200;
        let pathColor = needRecommendations != true ? '#0A881B' : '#A0A0A0';
        let pathShadowColor = needRecommendations != true ? 'rgba(10, 136, 27, 0.5)' : 'rgba(160, 160, 160, 0.4)';
        let trailColor = '#FFFFFF';
        let width = '5px';

        return (
            <div className="custom-circular-progressbar">
                <CircularProgressbarWithChildren
                    value={score}
                    minValue={minValue}
                    maxValue={maxValue}
                    styles={{
                        root: {
                            filter: `drop-shadow(0px 5px 8px ${pathShadowColor})`
                        },
                        text: {
                            fontSize: '30px',
                            fill: pathColor,
                            paddingTop: '12px',
                            fontWeight: '600'
                        },
                        path: {
                            stroke: pathColor,
                            strokeWidth: width
                        },
                        trail: {
                            stroke: trailColor,
                            strokeWidth: width
                        }
                    }}>
                    <p>
                        Your score
                        <br/>
                        <span className="custom-circular-progressbar-text" style={{color:pathColor}}>{score}</span>
                    </p>
                </CircularProgressbarWithChildren>
            </div>
        );
    }
}

// { background: { fill: 'white', transform: 'scale(0.8)', transformOrigin: 'center center', }, 
// root: { width: size, height: size, filter: 'drop-shadow(10px 10px 20px lightgray)', }, 
// trail: { strokeWidth: 0, }, 
// text: { fill: color, fontSize: 22, fontWeight: 800, animation: 'fadein 2s', }, }
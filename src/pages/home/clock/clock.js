import { StyledClock } from "./clock.styled";
import React, { useState, useEffect } from 'react';

function Clock() {

    const deg = 6;
    const [hh, setHH] = useState(new Date().getHours() * 30);
    const [mm, setMM] = useState(new Date().getMinutes() * deg);
    const [ss, setSS] = useState(new Date().getSeconds() * deg);


    useEffect(() => {
        const interval = setInterval(() => {
            setHH(new Date().getHours() * 30);
            setMM(new Date().getMinutes() * deg);
            setSS(new Date().getSeconds() * deg);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <StyledClock>
            <div className="numbers">
                <div className="one"></div>
                <div className="two"></div>
                <div className="number number-3">3</div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="number number-6">6</div>
                <div className="seven"></div>
                <div className="eight"></div>
                <div className="number number-9">9</div>
                <div className="ten"></div>
                <div className="eleven"></div>
                <div className="number number-12">12</div>
            </div>

            <div className="hour">
                <div className="hr" id="hr" style={{ transform: `rotateZ(${(hh)+(mm/12)}deg)`}}></div>
            </div>
            <div className="min">
                <div className="mn" id="mn" style={{ transform: `rotateZ(${mm}deg)`}}></div>
            </div>
            <div className="sec">
                <div className="sc" id="sc" style={{ transform: `rotateZ(${ss}deg)`}}></div>
            </div>
        </StyledClock>

    );
}

export default Clock;
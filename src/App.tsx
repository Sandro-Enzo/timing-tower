import './App.css';
import Driver from './Driver/Driver';

import drivers from './drivers.json';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        document.documentElement.style.setProperty(
            '--drivers',
            `${drivers.drivers.length}`
        );
    });

    let gap = 0;

    return (
        <>
            <div className='tower-container'>
                <div className={`blurry-background `}>
                    <div className='main-background'>
                        <div className='header'>
                            <div className='title'></div>
                            <div className='race-info'>
                                <div className='laps'>
                                    <span>
                                        LAP{' '}
                                        <span
                                            style={{
                                                color: 'white',
                                                fontSize: '1.5em',
                                            }}
                                        >
                                            3
                                        </span>
                                        /57
                                    </span>
                                </div>
                                <div className='checkpoints'>
                                    <span>
                                        CP{' '}
                                        <span
                                            style={{
                                                color: 'white',
                                                fontSize: '1.5em',
                                            }}
                                        >
                                            8
                                        </span>
                                        /46
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flag'>Blue Flag</div>
                        <div className='drivers'>
                            {drivers.drivers.map((driver, index) => {
                                const output = (
                                    <Driver
                                        brand={driver.brand}
                                        gap={gap.toFixed(3)}
                                        name={driver.name}
                                        position={driver.position}
                                        player={'player' in driver}
                                        key={index}
                                    />
                                );

                                gap += Math.random() * 3;

                                return output;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;


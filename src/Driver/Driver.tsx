import './Driver.css';

interface IDriver {
    position: number;
    brand: string;
    name: string;
    gap: string;
    player: boolean;
}

function Driver({ position, brand, name, gap, player }: IDriver) {
    const displayGap = parseFloat(gap) > 0 ? `+${gap}` : `-${gap}`;

    return (
        <div className={`driver ${player ? 'player' : ''}`}>
            <div className='position'>{position}</div>
            <div
                className='brand'
                style={{
                    backgroundImage: `url('./images/${brand}.webp')`,
                }}
            ></div>
            <div className={`name`}>{name}</div>
            <div className='gap'>
                {parseFloat(gap) > 0 ? displayGap : 'Leader'}
            </div>
            {/* <div className="tire">S</div> */}
        </div>
    );
}

export default Driver;

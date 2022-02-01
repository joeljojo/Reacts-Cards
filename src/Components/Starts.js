import '../index.css';
import Icon from '../Images/icon-ethereum.svg';
import Icon2 from '../Images/icon-clock.svg';
export default function Starts(){
    return(
        <div>
        <div className='stats'>
            <div className='left'>
                <div className="icon-ethereum">
                    <img src={Icon} alt='Icon-Ethereum'></img>
                </div>
                <div className="ethereum">
                    <p><span>0.041ETH</span></p>
                </div>
            </div>
            <div className='right'>
                <div className="icon-clock">
                <img src={Icon2} alt='Icon-clock'></img>
                </div>
                <div className="clock">
                    <p>3 days left</p>
                </div>
            </div>
        </div>
    
        </div>
    );
}
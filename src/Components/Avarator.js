import '../index.css';
import Profile from '../Images/image-avatar.png';
export default function Avarator(){
    return(
        <div className="profile">
        <div className="avarator">
            <img src={Profile} alt='Profile'></img>
        </div>
        <div className="details">
            <p>Creation of <span>Jules Wyvern</span></p>
        </div>
        </div>
    );
}
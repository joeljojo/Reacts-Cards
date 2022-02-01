import Image from '../Images/image-equilibrium.jpg';
import '../index.css';
export default function Photo2(){
    return(
        <div className='photo'>
        <img src={Image} alt='QR Image'></img>
        </div>
    );
}
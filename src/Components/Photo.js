import Image from '../Images/image-qr-code.png';
import '../index.css';
export default function Photo(){
    return(
        <div className='photo'>
        <img src={Image} alt='QR Image'></img>
        </div>
    );
}
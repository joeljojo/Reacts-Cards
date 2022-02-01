import Avarator from "./Avarator";
import Photo2 from "./Photo2";
import Starts from "./Starts";
import Text2 from "./Text2";

//import Image from '../Images/'
export default function Card2(){
    return(
        <div className="card2">
            <div className="content2">
                <Photo2/>
                <Text2/>
                <Starts/>
                <Avarator/>
            </div>
        </div>
    );
}
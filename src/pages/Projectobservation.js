import React, {useState, useEffect} from "react";
import Footer from "../component/Footer";
import { UserIc } from "../Public/Asset/Icons/CostumIcon";
import vector from "../images/vector.svg"
import { ToggleButton } from "@mui/material";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../component/FirebaseConfig";


export default function Projectobservation() {

const [selected, setSelected] = React.useState(false);


let [latitude, setlatitude] = useState(null);
let [longitude, setlongitude] = useState(null);
let [startlatitude, setstartlatitude] = useState(0);
let [startlongitude, setstartlongitude] = useState(0);
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


function getstartlocation() {
    navigator.geolocation.getCurrentPosition((post) => {
        setlatitude((p) => post.coords.latitude);
        setlongitude((p) => post.coords.longitude);
  
        setstartlatitude(post.coords.latitude);
        setstartlongitude(post.coords.longitude);
        
      });
}


const tyypit = [
    { label: 'Liikennermerkki vinossa' },
    { label: 'Maakivi' },]

const firebaseData = async() => {

    try {
    let docRef = await addDoc(collection(db, "data"),{
    desc: 'Pistehavainto',
    type: tyypit,
    date: currDate,
    time: currTime,
    startlat: startlatitude,
    startlong: startlongitude,
    
    })

    }catch(e){
    console.log(`error adding data to firestore: ${e} `)
}

}

useEffect(() => {
    getstartlocation()
  },[]);

if(selected){ 
console.log('Päällä')
firebaseData()
getstartlocation()

}else{

    console.log('Pois')
}

    return (
        <div className="projectobs">

            <div className="navContainer">
                <nav className="navbar">
                    <div className="user-pic"> <UserIc />
                     
                    </div>
     
                    <div>Projektihavainto</div>
                    
                    <div className="threedot">
                        <img src={vector} width={26.23} height={24} alt="Three" />
                    </div>
                </nav>
            </div>

            <Footer/>

            <div className="point-btn">
            <ToggleButton
            
            value={'check'}
            selected={selected}
            onChange={() => {
            setSelected(!selected);
            }}
            >PisteHavainto
            </ToggleButton>

            </div>
        </div>
    );

}

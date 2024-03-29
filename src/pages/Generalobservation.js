import React, { useEffect, useState } from "react";
import "../App.css";
import UploadPhoto from "../component/UploadPhoto";
import Utility from "../component/Utility";
import Description from "../component/Description";
import Post from "../component/Post";
import Dropd from "../component/Dropd";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, arrayUnion } from "@firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../component/FirebaseConfig";

// resizer
import Resizer from "@meghoshpritam/react-image-file-resizer";



 function Generalobservation() {

  const [selectedOption, setSelectedOption] = useState("");
  let [typ,setTyp] = useState("")
  let [imgUrl, setImgUrl] = useState([]);
  let [lat, setLat] = useState(0)
  let [long, setLong] = useState(0)
  let [dec, setDes] = useState('')
  let [imageFiles, setImageFiles] = useState([])
  let [isUploading, setIsUploading] = useState(false)
  let [isShowMessage, setIsShowMessage] = useState(false)
  let [uploadingPer, setUploadingPer] = useState(0)

  useEffect(()=>{
    const readData = async()=>{
      await getDocs(collection(db, "images")).then((querySnap)=>{
        querySnap.docs.map(doc=>{
          console.log(doc.data())
        })
      })
    }

    // readData();
  },[])

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer({
        file,
        maxWidth: 300,
        maxHeight: 300,
        compressFormat: "JPEG",
        quality: 100,
        rotation: 0,
        keepAspectRatio: true,
        responseUriFunc: (uri) => {
          resolve(uri);
        },
        outputType: "base64"
      });
    });

  const addData = async()=>{

    try{
      let docRef = await addDoc(collection(db, "data"), {
        latitude: lat,
        longitude: long,
        description: dec,
        dropdown : typ

      })
      
      if(docRef){
        imageFiles.map(async(file)=>{
          console.log('from app.js inside loop')

          const image = await resizeFile(file);
          console.log('from app.js')
          console.log(image)

          fetch(image)
          .then(res=>res.blob())
          .then(blob=>{
            let randFileName = Math.floor(Math.random() * 1000) + 1;
            let timeNow = Date.now()
            const resizedFile = new File([blob], `${randFileName+timeNow}.jpg`, { type: "image/jpeg" });
            
            const storageRef = ref(storage, 'new_images/' + resizedFile.name);
            const uploadTask = uploadBytesResumable(storageRef, resizedFile);

            uploadTask.on('state_changed',
            snapshot =>{
              setIsUploading(true)
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            },
            error =>{
              console.error("Error uploading file: ", error);
            },
            ()=>{
              // Handle successful uploads on complete
              getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                await updateDoc(docRef, {
                  images: arrayUnion(downloadURL)
                });
                setIsUploading(false)
                setIsShowMessage(true)
                setTimeout(()=>{
                  setIsShowMessage(false)
                }, 3000)
                console.log('File available at', downloadURL);
              });
            }
            )

          })
        })
        setImgUrl([]);
        setLat(0);
        setLong(0);
        setDes('');
        setImageFiles([]);
        setTyp("");
      }
    }catch(e){
      console.log(`error while adding data in firestore: ${e}`)
    }

    console.log('from bottom')
    // console.log(imageFiles)

  }

  return (

    <div className="App">
      <div className="rest">
        {/* the first box for uploding photo */}
        <UploadPhoto imgState={imgUrl} imgSetState={setImgUrl} imageFile={imageFiles} setImageFile={setImageFiles} />
        
        {/* box for camera access  and photo select and gps  icons  */}
        <Utility lati={lat} longi={long} imgState={imgUrl} imgSetState={setImgUrl} imageFile={imageFiles} setImageFile={setImageFiles} setLatitude={setLat} setLongitude={setLong} />
        {/* maps */}
        <Dropd type={typ} setType={setTyp}/>
        
        <Navbar/>
      
        {/* box for description  */}
        <Description setDescription={setDes} desi={dec} />
        {/* post button */}
        <Post onSubmit={addData} />
        
        <Footer />
      </div>

      
      
      </div>
  );
}

export default Generalobservation

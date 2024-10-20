'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'; 
import classes from './image-picker.module.css'
export default function ImagePicker({label , name}){
    const[pickedImage ,setPickedImage]=useState();
    const imageInput= useRef();
    function handlePickClick(){
imageInput.current.click()
    }
    function handleImageChange(event){
        const file=event.target.files[0]
        if (!file) {
            setPickedImage(null);
            return;
          }
          
    }
    return <div className="classes.picker">
<label htmlFor='image'> {label}</label>
<div className="classes.controls"> 
    <div className={classes.preview}></div>
    {!pickedImage&& <p>No image picked yet</p>}
    {pickedImage &&(
        <Image 
        src={pickedImage}
        alt="the image selected by the user"
        fill/>
    )}
<input

className={classes.input}
type="file"
id={name}
accept="image/png, image/jpeg"
name={name}
ref={imageInput}
required
    />
   <button
          className={classes.button}
          type="button" // Empêcher la soumission accidentelle
          onClick={handlePickClick}
        >
          Pick an image
        </button>
    </div>
    </div>

}
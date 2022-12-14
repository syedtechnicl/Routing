import { useEffect } from "react";
import { useState } from "react";
import Img from "./Img";

const Main = () => {
   const date= new Date().getFullYear(); 
  const [img, setimg] = useState("");

 useEffect(()=>{
    document.title = `${img}`
 })


  return (
    <>
      <div className="container-fluid">
        <center className="bg bg-danger p-2 fw-bold">
          <b>
          <h1 style={{fontWeight:'bold'}}>Search Any Img <span className="text-white text-capitalize">{img}</span></h1>
          </b>
        </center>
        <div className="mains">
          <br />
          <br />
          <input
            type="text"
            placeholder="Search Any Img"
            className="form-control"
            onChange={(e) => {
              setimg(e.target.value);
            }}
            value={img}
          />
        </div>
      </div>
      <br /><br />

      <Img name={img} />
      <br />
      <footer>
        <center>
            <p>
                
© Copyright & ℗  <span className="text-danger">Syed Muqtadeer</span>  {date} copyright
            </p>
        </center>
      </footer>
    </>
  );
};
export default Main;

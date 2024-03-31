import { Route, Routes } from "react-router-dom"
import { Gallery } from "../Gallery/Gallery";
import { ImageDetails } from "../Image_details/ImageDetails";

export function CustomRouter (){
    return(
        <Routes>
            <Route path="/" element={<Gallery/>} />
            <Route path="/Image/:id" element={<ImageDetails />} />
        </Routes>
    );
}
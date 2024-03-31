import { useParams } from "react-router-dom";
import "./ImageDetails.css";
import axios from "axios";
import { useState, useEffect } from "react";

export function ImageDetails() {
    const { id } = useParams();
    const [image, setImage] = useState({ title: "", description: "", image: "" });

    useEffect(() => {
        async function Get_details() {
            try {
                const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);

                if (response.data.success) {
                    const { title, description, url: image } = response.data.photo; 
                    setImage({ title, description, image });
                } else {
                    console.error("Photo not found");
                }
            } catch (error) {
                console.error("Error fetching image details:", error);
            }
        }
        Get_details();
    }, [id]);

    return (
        <div className="upperContainer">
            <div><img className="imgClass" src={image.image} alt={image.title} /> </div>
            <div className="Container">
            <div> Title: <span>{image.title}</span> </div>
            <div className="Descriptions"> Descriptions: <span> {image.description} </span> </div>
            </div>
        </div>
    );
} 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "../Image/Image";
import "./Gallery.css"

export function Gallery() {
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function DownloadPhotos() {
        try {
            const response = await axios.get(
                `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`
            );
            const LoadedData = response.data.photos;

            const AllImage = await axios.all(
                LoadedData
            );

            const result = AllImage.map((dataImage) => ({
                image: dataImage.url,
                id: dataImage.id
            }));



            setPhotoList(result);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching photos:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        DownloadPhotos();
    }, []);

    return (
        <div className="gallery_conatainer">
            {isLoading ? (
                <p className="Loading">Loading....</p>
            ) : (
                photoList.map(val => (
                    <Image image={val.image} key={val.id} id={val.id}/>
                ))
            )}
        </div>
    );
}
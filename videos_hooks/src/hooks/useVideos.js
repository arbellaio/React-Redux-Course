import youtube from "../apis/youtube";
import {useEffect, useState} from "react";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    // const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items)
        // setSelectedVideo(response.data.items[0])
    };
    return [videos, search]
}

export default useVideos;

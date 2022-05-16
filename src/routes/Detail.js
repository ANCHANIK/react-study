import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `http://192.168.1.128:35500/src/movie.json?movie_id=${id}`
                // `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json)
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <>
            <h1>Details</h1>
        </>
    )
}

export default Detail;
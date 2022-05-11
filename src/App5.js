import React from "react";
import { useState, useEffect } from "react";

function App5 () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
		// async-await 사용
    const getMovies = async() => {
			const json = await (
				await fetch(
					'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101'
				)
			).json();
			setMovies(json.boxOfficeResult.dailyBoxOfficeList);
			setLoading(false);
		}

		useEffect(() => {
			getMovies();
		}, [])
		
    /* then 사용했을 때 
        useEffect(() => {
            fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101')
            .then((response) => response.json())
            .then(json => {
                setMovies(json.boxOfficeResult.dailyBoxOfficeList);
                setLoading(false);
            })
        }, [])
    */
		console.log(movies)
			
    return (
        <>
            {loading ? (
							<h1>Loading...</h1>
						) : (
							<div>
								{movies.map((item) => (
									<div key={item.audiAcc}>
										<h2>{item.movieNm}</h2>
										<p>개봉일: {item.openDt}</p>
										<p>영화순위: {item.rank}위</p>
										<p>누적관객수: {item.audiCnt.toLocaleString()}명</p>
									</div>
								))}
							</div>
						)}
        </>
    )
}

export default App5;
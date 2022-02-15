import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [gifs, setGifs] = useState([]);
	useEffect(() => {
		function getGifData() {
			const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=minions&limit=10&rating=G&lang=en`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log('We have data!', res.data);
					setGifs(res.data);
				})
				.catch(console.error);
		}
		getGifData();
	}, []);

  return (
    <div className="App">
   <h1>Testing Netlify Deployment</h1>
   {gifs.map(gif=>
     <img key={gif.id} src={gif.images.downsized_medium.url} />
   )}
    </div>
  );
}

export default App;

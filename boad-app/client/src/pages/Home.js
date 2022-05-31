import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
	const [listOfPosts, setListOfPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('http://localhost:3001/posts')
			.then((response) => {
				console.log(response.data);
				setListOfPosts(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{listOfPosts.map((value, key) => {
				return (
					<div key={key} className='post' onClick={() => { navigate(`/post/${value.id}`) }}>
						<div className='title'>{value.title}</div>
						<div className='body'>{value.postText}</div>
						<div className='footer'>{value.userName}</div>
					</div>
				)
			})}
		</div>
	)
}

export default Home
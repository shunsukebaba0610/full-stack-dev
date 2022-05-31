import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
	const [postData, setPostData] = useState({});
	//postページからURLパラメータを取得
	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:3001/posts/byId/${id}`)
			.then((response) => {
				console.log(response.data);
				setPostData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='postPage'>
			<div className='leftSide'>
				<div className="post" id="individual">
					<div className='title'>{ postData.title }</div>
					<div className='body'>{ postData.postText }</div>
					<div className='footer'>{ postData.userName }</div>					
				</div>
			</div>
			<div className='rightSide'>Comment Section</div>
		</div>
	)
}

export default Post
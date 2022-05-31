import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
	const navigate = useNavigate();

	const initialValue = {
		title: '',
		postText: '',
		userName: '',
	}

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('You must Input a Title!'),
		postText: Yup.string().required(),
		userName: Yup.string().min(3).max(15).required(),
	});

	const onSubmit = (data) => {
		console.log(data);
		axios.post('http://localhost:3001/posts', data)
			.then((response) => {
				alert('It Worked');
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	

	return (
		<div className='createPostPage'>
			<Formik
				initialValues={initialValue}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className='formContainer'>
					<label>Title： <ErrorMessage name='title' component="span" /></label>
					<Field
						autoComplete="off"
						className="inputCreatePost"
						name="title"
						placeholder="タイトルを入力してください" />

					<label>PostText： <ErrorMessage name='postText' component="span" /></label>
					<Field
						autoComplete="off"
						className="inputCreatePost"
						name="postText"
						placeholder="コメントを入力してください" />

					<label>UserName： <ErrorMessage name='userName' component="span" /></label>
					<Field
						autoComplete="off"
						className="inputCreatePost"
						name="userName"
						placeholder="名前を入力してください" />
					<button type='submit'>Create Post</button>
				</Form>
			</Formik>
		</div>
	)
}

export default CreatePost
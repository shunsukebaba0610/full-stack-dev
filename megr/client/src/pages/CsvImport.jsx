import React from 'react'
import { useRef } from 'react';

const reader = new FileReader();

const CsvImport = () => {
	const csvfile = useRef(null);

	const csvImportSubmit = (e) => {
		e.preventDefault();
		console.log("aaaaa");

		reader.onload = (e) => {
			const result = e.target.result;
			console.log(result);
		};
	}

	const fileCheck = (e) => {
		const file = e.target.files[0];
		console.log(file);
		reader.readAsText(file);
	}

	return (
		<div>
			<form onSubmit={csvImportSubmit}>
        <input type="file" ref={csvfile} onChange={fileCheck} />
        <button type="submit">インポート</button>
      </form>
		</div>
	)
}

export default CsvImport

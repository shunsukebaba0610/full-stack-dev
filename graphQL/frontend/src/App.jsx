import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

function App() {

  const Books = () => {
    const { loading, error, data } = useQuery(BOOKS);

    if (loading) return `<p>ロード中・・・</p>`;
    if (loading) return `<p>ロード中・・・</p>`;
    console.log(data);

    return data.test.map(({ title, author }) => (
      <div key={title}>
        <p>
          {author} : {title}
        </p>
      </div>
    ));
  }
  
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  )
}

export default App

import React, {useState, useEffect} from 'react';
import Table from './Table';
import Form from './Form';

function MyApp() {
	const [characters, setCharacters] = useState([]);  

	function removeOneCharacter (index) {
		removeUser(index)
	    .then((res) => {
			if (res.status === 203) {
				setCharacters(characters.filter((character, i) => {return i !== index}))
			}
		})
		.catch((error) => {
			console.log(error);
		})
	}

	function updateList(person) { 
		postUser(person)
		.then((res) => {
			if (res.status === 201) {
				return res.json();
			}
		})
		.then(
			person => setCharacters([...characters, person])
		)
		.catch((error) => {
			console.log(error);
		});
	}

	function fetchUsers() {
		const promise = fetch("http://localhost:8000/users");
		return promise;
	}

	function removeUser(index) {
		let id = characters.at(index).id;
		const promise = fetch(`http://localhost:8000/users/${id}`, { method: "DELETE" });
		return promise;
	}

	function postUser(person) {
		const promise = fetch("http://localhost:8000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(person),
		});
	
		return promise;
	}

	useEffect(() => {
		fetchUsers()
			.then((res) => res.json())
			.then((json) => setCharacters(json["users_list"]))
			.catch((error) => { console.log(error); });
	}, [] );

	return (
		<div className="container">
			<Table characterData={characters} 
				removeCharacter={removeOneCharacter} />
			<Form handleSubmit={updateList} />
		</div>  
	)
}

export default MyApp;
import React, { useState, useContext } from 'react';



const  Search = () => {


	const [text, setText] = useState('');



	const onSubmit= (e) => {
		e.preventDefault();
		if(text === ''){
			AlertContext.showAlert('Please enter something', 'light')
		} else{
			UserContext.searchUsers(text);
			setText('');
		}
		
	};
	const onChange = e => {
		setText(e.target.value);
	};

		return(
			<div>
				<form onSubmit={onSubmit} className="form">
					<input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
				{GithubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={GithubContext.clearUsers}> Clear </button> }
				 
				
			</div>
	
		)
}


export default Search;
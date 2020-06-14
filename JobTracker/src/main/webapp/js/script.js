window.addEventListener('load', function(e){
	console.log('you rang?');
	init();
	
});

function init(){
	document.userForm.lookup.addEventListener('click', userInfo);
	document.viewApps.viewLog.addEventListener('click', viewAppEntries);
	document.entryForm.submit.addEventListener('click', addAppEntry);
	document.addEventListener('click', updateApps);
	// document.addEventListener('click', removeApps);
}
function userInfo(){
	event.preventDefault();
			let userId = document.userForm.userId.value;
			console.log(userId);
			if(!isNaN(userId) && userId > 0){
			getApplicationsByUserId(userId);
			}
}

///GET Applications XHR////////
function viewAppEntries(e){
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/applied', true);

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200| xhr.status === 201){
				let appInput = JSON.parse(xhr.responseText);
				displayApplications(appInput);
			} else {
				console.error('invalid request '+ xhr.status);
			}
		}
		if(xhr.readyState === 4 && xhr.status !== 200){
			console.log(xhr.status);
		}
	}
	xhr.send();
}



function displayApplications(app){
	console.log(app + 'line47');
	let div = document.getElementById('allEntries');
	div.textContent = '';
	let table = document.getElementById('entryTable');
	let tableRow = document.createElement('tr');
	let tableHead = document.createElement('thead');
	
	
	let tableHeadDescription = document.createElement('th');
	let tableHeadAppTitle = document.createElement('th');
	let tableHeadAppCompanyName = document.createElement('th');
	let tableHeadAppDate = document.createElement('th');
	let tableHeadAppState = document.createElement('th');
	let tableHeadAppCity = document.createElement('th');
	let tableHeadAppZip = document.createElement('th');

	let tableBody = document.createElement('tbody');
	

	//VV////convert to table////VV///////

	tableHeadDescription.textContent = 'Description';
	tableHeadAppTitle.textContent = 'Title';
	tableHeadAppCompanyName.textContent = 'Company Name';
	tableHeadAppDate.textContent = 'Date Applied';
	tableHeadAppState.textContent = 'State';
	tableHeadAppCity.textContent = 'City';
	tableHeadAppZip.textContent = 'Zip Code';
	

	//implement displayApplications
	tableRow.appendChild(tableHeadAppTitle);
	tableRow.appendChild(tableHeadDescription);
	
	tableRow.appendChild(tableHeadAppCompanyName);
	tableRow.appendChild(tableHeadAppDate);
	tableRow.appendChild(tableHeadAppState);
	tableRow.appendChild(tableHeadAppCity);
	tableRow.appendChild(tableHeadAppZip);

	tableHead.appendChild(tableRow);
	table.appendChild(tableHead);

	app.forEach(function(value, idx, arr){
		let tr = document.createElement('tr');
		let inputTitle = document.createElement('td');
		let inputDescription = document.createElement('td');
		let inputCompanyName = document.createElement('td');
		let inputAppDate = document.createElement('td');
		let inputState = document.createElement('td');
		let inputCity = document.createElement('td');
		let inputZipCode = document.createElement('td');
		let update = document.createElement('td');
		let remove = document.createElement('td');

		let updateBtn = document.createElement('input');
		updateBtn.type = 'submit';
		updateBtn.id = 'updatebtn';
		updateBtn.value = 'Edit';

		let deleteBtn = document.createElement('input');
		deleteBtn.type = 'button';
		deleteBtn.id = 'updatebtn';
		deleteBtn.value = 'Remove';

		//set textContent to value fields
		inputTitle.textContent = value.title;
		inputDescription.textContent = value.description;
		inputCompanyName.textContent =  value.companyName;
		inputAppDate.textContent = value.applyDate;
		inputState.textContent = value.state;
		inputCity.textContent = value.city;
		inputZipCode.textContent = value.zipCode;

		//create rows
		tr.appendChild(inputTitle);
		tr.appendChild(inputDescription);
		tr.appendChild(inputCompanyName);
		tr.appendChild(inputAppDate);
		tr.appendChild(inputState);
		tr.appendChild(inputCity);
		tr.appendChild(inputZipCode);

		tr.appendChild(updateBtn);
		tr.appendChild(deleteBtn);
		tableBody.appendChild(tr);

	});
	table.appendChild(tableBody);
	div.appendChild(table);
	
}

///POST //////
function addAppEntry(e, userId){
	e.preventDefault();
	let form = e.target.parentElement;
	let title = form.title.value;
	let description = form.description.value;
	let companyName = form.companyName.value;
	let state = form.state.value;
	let city = form.city.value;
	let zipCode = form.zipCode.value;
	
	let xhr = new XMLHttpRequest();
	let uri = 'api/applied/'+ userId;
	
	xhr.open('POST', uri, true);
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let createdAppJSON = JSON.parse(xhr.responseText);
				// displayApplications(createdAppJSON);
				console.log(createdAppJSON);
			}else {
				if(xhr.status === 400){
					console.log('invalid JSON'+ `<pre>${appJSON}</pre>`);
					displayError(`invalid film data, <pre>${appJSON}</pre>`);
				} else{
					displayError('invalid' + xhr.status);
				}
			}
		}
	};
	let input = {
	"title": form.title.value,
	"description": form.description.value,
	"companyName": form.companyName.value,
	"state": form.state.value,
	"city": form.city.value,
	"zipCode": form.zipCode.value
	};
	console.log(input);
	let appJSON = JSON.stringify(input);
	console.log(input);
	xhr.send(appJSON);

	form.reset();
}//addEntry end function

///UPDATE AppEntry/////////////
function updateApps(e){
	if(e.target && e.target.id === 'updateBtn'){
		console.log('update');
		let form = document.createElement('form');
		let inputTitle = document.createElement('input');
		let inputCompanyName = document.createElement('input');
		let inputDesciption = document.createElement('input');
		let inputState = document.createElement('input');
		let inputCity = document.createElement('input');
		let inputZipCode = document.createElement('input');
		let submit = document.createElement('input');

		inputTitle.name = 'title';
		inputTitle.type = 'text';
		inputTitle.value = e.target.parentElement.firstChild.textContent;

		inputCompanyName.name = 'companyName';
		inputCompanyName.type = 'text';
		inputCompanyName.value = e.target.parentElement.firstChild.textContent;

		inputDesciption.name = 'description';
		inputDesciption.type = 'text';
		inputDesciption.value = e.target.parentElement.firstChild.nextSibling.textContent;

		inputState.name = 'state';
		inputState.type = 'text';
		inputState.value = e.target.parentElement.firstChild.nextSibling.nextSibling.textContent;

		inputCity.name = 'city';
		inputCity.type = 'text';
		inputCity.value = e.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.textContent;
	
		inputZipCode.name = 'zipCode';
		inputZipCode.type = 'number';
		inputZipCode.value = e.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
	
		//buttons
		submit.name = 'submit';
		submit.id = 'submit';
		submit.value = 'Submit';
		submit.type= "submit";


		form.appendChild(inputTitle);
		form.appendChild(inputCompanyName);
		form.appendChild(inputDesciption);
		form.appendChild(inputState);
		form.appendChild(inputCity);
		form.appendChild(inputZipCode);


		doocument.getElementByTagName('body')[0].appendChild(form);
		document.addEventListener('click', updateSubmit);
	}
}
function updateSubmit(e){
	e.preventDefault();
	let uri = 'api/applied/' + appId;
 	if(e.target && e.target.id === 'submit'){
		let xhr = new XMLHttpRequest();
		xhr.open('PUT', uri, true );
		xhr.setRequestHeader('Content-type', 'application/json');

		xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let updateApp = JSON.parse(xhr.responseText);
				console.log(updateApp);

			} else {
				console.log('hmm.. check your PUT');
				console.log(xhr.status + ' '+ xhr.responseText);
			}
		}	
		};
		let updateInput = {
			'title': title,
			'companyName': companyName,
			'description': description,
			'state': state,
			'city': city,
			'zipCode': parseInt(zipCode);
		}
		let inputJSON = JSON.stringify(updateInput);
		xhr.send(inputJSON);

		form.reset();
		document.removeEventListener('click', updateSubmit);
	}
}
/////////DELETE Appl////////
function removeApps(e){
	if(e.target && e.target.id == 'removeBtn'){
		let inputTitle = e.target.parentElement.firstChild.textContent;
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', uri, true)


	}

}


/////////USERS///////

function getApplicationsByUserId(userId){
	let xhr = new XMLHttpRequest();
	let uri = 'api/applied/' + userId;

	xhr.open('GET', uri, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let usersJSON = JSON.parse(xhr.responseText);
			
				displayApplications(usersJSON);
				displayUsers(usersJSON);
			}
			else if(xhr.status === 404){
				displayError('User not Found.');
			}
			else {
				displayError('Invalid user'+ userId);
			}
		}
	};
	xhr.send(null);
}

function displayUsers(users){
	let dataDiv = document.getElementById('userData');
	dataDiv.textContent = '';

	if(users.length > 0){
		let header = document.createElement('h2');
		header.textContent = '';
		dataDiv.appendChild(header);

		let ul = document.createElement('ul');
		for(let i = 0; i <users.length; i++){
			let li = document.createElement('li');
			li.textContent = users[i].firstName + ' '+ users[i].lastName;
		}
		dataDiv.appendChild(ul);
	} else {
		dataDiv.textContent = 'invalid request, no user';
	}
}

function displayError(message){
	let userDiv = document.getElementById('userData');
	userDiv.textContent = message;
	let appDiv = document.getElementById('appData');
	appDiv.textContent = '';
}

// 	if(app.title === ''){
// 		errors.push('Title must be entered.');
// 	}
// 	if(app.companyName === ''){
// 		errors.push('Company Name must be provided.');
// 	}
// 	if(app.description === ''){
// 		errors.push('Description must be provided.');
// 	}
// 	if(app.state.length !== 2){
// 		errors.push('State must two characters.');
// 	}
// 	if(app.city === ''){
// 		errors.push('City must be provided.');
// 	}
// 	if(app.zipCode === 5){
// 		if(typeof parseInt(zipCode) !== 'number'){
// 			errors.push('Zip must be a number');
// 		}
// 	} else{
// 		errors.push('Zip code must be 5 numbers long.');
// 	}
// 	return errors;



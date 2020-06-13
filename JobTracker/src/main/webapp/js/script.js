window.addEventListener('load', function(e){
	console.log('you rang?');
	init();
	
});

function init(){
	document.viewApps.viewLog.addEventListener('click', viewAppEntries);
	document.entryForm.submit.addEventListener('click', addEntry);
}


//Send asynchronous requests to Java controllers with JavaScript's `XMLHttpRequest
//binary object converted to JSON data
function getAppsByUserId(userId){
	let xhr = new XMLHttpRequest();
	let uri = 'api/applied/' + userId;
	

	xhr.open('GET', uri, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let usersJSON = JSON.parse(xhr.responseText);
			
				displayApplications(app);
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
	xhr.send();
}
/////////USERS///////
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
///GET Applications XHR////////
function viewAppEntries(e){
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
	// console.log(app);//debugging
	let div = document.getElementById('allEntries');
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

	app.forEach(function(value, idex, arr){
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

	});
	table.appendChild(tableBody);
	div.appendChild(table);
	
}


// function createApp(){
// 	let form = document.newJobAppForm;
// 	let app = {};
// 	let errors = [];

// 	app.title = form.title.value;
// 	app.companyName = form.companyName.value;
// 	app.description = form.description.value;
// 	// app.applyDate = form.applyDate.value;
// 	app.state = form.state.value;
// 	app.city = form.city.value;
// 	app.zipCode = form.zipCode.value;

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

	
// }
// console.log(app + ':');
// 	addEntry(app);

///POST //////
function addEntry(e){
	let form = e.target.parentElement;
	let title = form.title.value;
	let description = form.description.value;
	let companyName = form.companyName.value;
	let state = form.state.value;
	let city = form.city.value;
	let zipCode = form.zipCode.value;


	let xhr = new XMLHttpRequest();
	let uri = 'api/applied';
	let appJSON = JSON.stringify(input);

	xhr.open('POST', uri, true);
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let createdAppJSON = JSON.parse(xhr.responseText);
				displayApplications(createdAppJSON);
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
	 "companyName":form.companyName.value,
	 "state": form.state.value,
	 "city": form.city.value,
	 "zipCode": form.zipCode.value
	};
	console.log(app);
	xhr.send(appJSON);
	form.reset();
}//addEntry end function
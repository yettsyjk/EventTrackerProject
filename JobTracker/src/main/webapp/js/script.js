window.addEventListener('load', function(){
	console.log('you rang?');
	init();
	
});
function init(){
    console.log('test');
    let addAppBtn = document.getElementById('addApp');
    addAppBtn.addEventListener('click', createAppJS);
    document.appForm.app.addEventListener('click', function(e){
        e.preventDefault();
        let userId = document.appForm.userId.value;
        if(!isNaN(userId) && userId > 0){
            getAllUsers(userId);
        } 
    });
}

      
function displayUsers(app){
  
    let appDiv = document.getElementById('applications');
    appDiv.textContent = '';
    let ul = document.createElement('ul');
    for(let i = 0; i< app.length; i++){
        
        let li = document.createElement('li');
        let userfName = document.createElement('blockquote');
        let userlName = document.createElement('blockquote');
        let userEmail = document.createElement('blockquote');
        userfName.textContent = app[i].firstName;
        userlName.textContent = app[i].lastName;
        userEmail.textContent = app[i].email;
        li.appendChild(userfName);
        li.appendChild(userlName);
        li.appendChild(userEmail);
        ul.appendChild(li);
    }
    appDiv.appendChild(ul);
}


function getAllUsers(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users', true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let appInput = JSON.parse(xhr.responseText);
                displayUsers(appInput);
                console.log(appInput);
			} else {
				console.error('invalid request '+ xhr.status);
                error('invalid');
            }
        }
	}
	xhr.send(null);
}
function createUserForm(){
    let addUserBtn = document.getElementById('addUser');
    let div = document.getElementById('createUser');
    let form = document.createElement('form');
    form.name = 'createUserForm';


    let firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.name = 'firstName';
    firstName.placeholder = 'Enter First Name';
    form.appendChild(firstName);
    form.appendChild(document.createElement('br'));

    let lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.name = 'lastName';
    lastName.placeholder = 'Enter First Name';
    form.appendChild(lastName);
    form.appendChild(document.createElement('br'));


    let email = document.createElement('input');
    email.type = 'text';
    email.name = 'email';
    email.placeholder = 'Enter First Name';
    form.appendChild(email);
    form.appendChild(document.createElement('br'));

    let password = document.createElement('input');
    password.type = 'text';
    password.name = 'password';
    password.placeholder = 'Enter First Name';
    form.appendChild(password);
    form.appendChild(document.createElement('br'));

    let username = document.createElement('input');
    username.type = 'text';
    username.name = 'username';
    username.placeholder = 'Enter First Name';
    form.appendChild(username);
    form.appendChild(document.createElement('br'));


    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.value = 'Submit';

    
    submit.addEventListener('click', addUser);
    addUserBtn.removeEventListener('click', createUserForm);

}

function addUser(e){
    e.preventDefault();
    let form = document.createUserForm;
    let usr = {};
    usr.title = form.title.value;
    usr.description = form.description.value;
    usr.companyName = form.companyName.value;
    usr.state = form.state.value;
    usr.city = form.city.value;
    usr.zipCode = form.zipCode.value;
    postUser(usr);
}

function postUser(usr){
    let form = document.createUserForm;
    let usrJSON = JSON.stringify(usr);
    let xhr = new XMLHttpRequest();
	let uri = 'api/applied';
	
	xhr.open('POST', uri, true);
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let createdAppJSON = JSON.parse(xhr.responseText);
                console.log(createdAppJSON);
                displayUsers(createdAppJSON);
			}else {
				if(xhr.status === 400){
					console.error(xhr.status + ' : ' + xhr.responseText);
					errors(`invalid film data, <pre>${appJSON}</pre>`);
				} else{
					displayError('invalid' + xhr.status);
				}
			}
		}
    };  
    console.log(usr+ ' -line 153');
   
    xhr.send(usrJSON);
    form.reset();
}



/////////DELETE Appl////////
function removeUser(appId){
	let uri = 'api/applied/' + appId;
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', uri, true);
		
			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4){
					if(xhr.status === 200 || xhr.status === 204){
						let removeData = JSON.parse(xhr.responseText);
						console.log(removeData + 'removed');
                    } 
                    if(xhr.readyState === 4 && xhr.status >= 400){
						console.log('hmm.. delete requires attention');
						console.error(xhr.status + ' : ' + xhr.responseText);
                    }
                 }
				};
			xhr.send(null);
		}

function errors(message){
    let div = document.getElementById('applications');
    let h1 = document.createElement('h3');
    h1.textContent = message;
    div.appendChild(h1);


}
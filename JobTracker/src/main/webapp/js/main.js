window.addEventListener('load', function(e){
	console.log('you rang?');
	init();
	
});
function init(){
    console.log('test');
    document.appForm.lookup.addEventListener('click', function(e){
        e.preventDefault();
        let applId = document.appForm.appId.value;
        if(!isNaN(applId) && applId > 0){
            getApp(applId);
        } 
    });
    let btn = document.addForm.submit;
    btn.addEventListener('click', function(e){
    e.preventDefault();
    let form = document.addForm;
    let app = {
        title: form.title.value,
	    description: form.description.value,
	    companyName: form.companyName.value,
	    state: form.state.value,
	    city: form.city.value,
	    zipCode: form.zipCode.value
        };
    createApp(app);
    });
}

function getApp(applId){
    e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/applied/'+ applId, true);

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200| xhr.status === 201){
				let appInput = JSON.parse(xhr.responseText);
                displayApp(appInput);
                console.log(appInput);
			} else {
				console.error('invalid request '+ xhr.status);
			}
		}
		if(xhr.readyState === 4 && xhr.status !== 200){
			console.error(xhr.status + ' : ' + xhr.responseText);
		}
	};
	xhr.send(null);
}

function createApp(app){
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
					console.error(xhr.status + ' : ' + xhr.responseText);
					displayError(`invalid film data, <pre>${appJSON}</pre>`);
				} else{
					displayError('invalid' + xhr.status);
				}
			}
		}
    };  
    console.log(app);
    let appJSON = JSON.stringify(app);
    xhr.send(appJSON);
}

function displayApp(app){
    let appDiv = document.getElementById('appData');
    appDiv.textContent = '';

    let appTitle = document.createElement('h1');
    appTitle.textContent = app.title;
    appDiv.appendChild(appTitle);

    let ul = document.createElement('ul');
    appDiv.appendChild(ul);

    let li = document.createElement('li');
    li.textContent = 'Title:'+ app.title;
    ul.appendChild(li);

    li.textContent = 'Description:'+ app.description;
    ul.appendChild(li);

    li.textContent = 'State:'+ app.state;
    ul.appendChild(li);
}

/////////DELETE Appl////////
function removeApp(e){
	let uri = 'api/applied/ + appId';
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
	
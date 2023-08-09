document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-anime').value
    console.log(text)
	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	const url = `https://myanimelist.p.rapidapi.com/anime/search/${text}/20`;

	console.log(text);

	xhr.open( 'GET', url)
	xhr.setRequestHeader('X-RapidAPI-Key', '82dce8e956mshe41c5094540ec3ep16b5e4jsn054f9ae7647f');
	xhr.setRequestHeader('X-RapidAPI-Host', 'myanimelist.p.rapidapi.com');

	xhr.onreadystatechange = () => {
		if(xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText)
			// console.log(res);
			const response = JSON.parse(xhr.responseText)
			console.log(response)
			let output = ''
			for(let i=0; i < response.length; i++) {
				output += `
					<div style="width: 15%; margin: 25px;  background color: blue;">	<hr>			
						<div style="border:5px; border-color: orange;">
							<a href=" ${response[i].myanimelist_url}" >
								<img style="width:50%" src="${response[i].picture_url}">
								<h4>${response[i].title}</h4>
								<p>${response[i].description}</p>
							</a>
						</div>
					</div>
					<hr>	   
				`
			}
			document.getElementById('my-div').innerHTML = output
		}	
	}
	xhr.send();
})
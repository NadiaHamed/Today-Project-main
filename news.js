// api url
//const api_url ="https://jsonplaceholder.typicode.com/users";
const key='9832ecfdecb64916a515132f5fb04164';
      
 var api_url = 'https://newsapi.org/v2/everything?' +
         'q=Apple&' +
         'from=2021-12-20&' +
          'sortBy=popularity&' +
        `apiKey=${key}`;
        
        // for search by word 
// var api_url = 'https://newsapi.org/v2/everything?' +'q=Apple&' +'from=2021-12-20&' +'sortBy=popularity&' +`apiKey=${key}`;
// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data.articles);
	if (response) {
		hideloader();
	}
	show(data.articles);
}

 
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
 
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>source</th>
		<th>name</th>
		<th>author</th>
		<th>url</th>
		<th>urlToImage</th>
		<th>publishedAt</th>
		<th>content</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.source} </td>
	<td>${r.name}</td>
	<td>${r.author}</td>
	<td>${r.url}</td>		
	<td>${r.urlToImage}</td>	
	<td>${r.publishedAt}</td>	
	<td>${r.content}</td>	

</tr>`;
	}
	// Setting innerHTML as tab variable
	//document.getElementById("employees").innerHTML = tab;





	document.getElementById('hi').innerHTML = data.map(r => 
		` <div class="d-flex justify-content-center row">
		<div class="col-md-10" >
		</div><div class="row p-2 bg-white border rounded">
		<div class="col-md-3 mt-1" ><img class="img-fluid img-responsive rounded product-image"   src="${r.urlToImage}"></div>
	   
		  <div class="col-md-6 mt-1"> <h5>  ${r.source.name}</h5> 
		  <div class="mt-1 mb-1 spec-1"><span> ${r.content}</span></div> 
		  </div>
		  <div class="align-items-center align-content-center col-md-3 border-left mt-1">
		  <a href=${r.url} target="_blank"> Read more</a>
		   	</div>  </div>
		</div> <br>`
	  ).join('')
	   



}

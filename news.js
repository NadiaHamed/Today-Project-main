// api url
//const api_url ="https://jsonplaceholder.typicode.com/users";
const key='9832ecfdecb64916a515132f5fb04164';
    var pageSize=5;
	var pre=0;  
	var next=1;  
	var page=1;
	var categ='';
 
   var url;
   var url2   = 'https://newsapi.org/v2/top-headlines?' +
		 		 'category=general&' +
		 `pageSize=${pageSize}`+
		 `&page=${page}`+
		 `&apiKey=${key}`; 
      
async function pagenext(page){
	next=next+1;
 
	if(categ==''){

		categ='general'
	  }
	let keyword = document.getElementById('search').value;
	if(keyword==''){
	var url = 'https://newsapi.org/v2/top-headlines?' +
	'category='+categ+
	 `&pageSize=${pageSize}`+
	 `&page=${next}`+
	 `&apiKey=${key}`;
	
	}
	else{	var url = 'https://newsapi.org/v2/top-headlines?' +
	'category='+categ+
	 `&pageSize=${pageSize}`+
	 `&page=${next}`+
	 `&apiKey=${key}`;}
   getapi(url,next);
pre=next-1;
  // }


}
async function pageprev(page){
//	pre=next;
	//pre=pre-1;
	var url;
	let keyword = document.getElementById('search').value;
  if(categ==''){

	categ='general'
  }
  
if(keyword==''){
	 url = 'https://newsapi.org/v2/top-headlines?' +
	 'category='+categ+
	 `&pageSize=${pageSize}`+
		 `&page=1`+
		 `&apiKey=${key}`;}
		 else{

			url = 'https://newsapi.org/v2/top-headlines?' +
			'category='+categ+
			 `&pageSize=${pageSize}`+
			 `&page=${page}`+
			 `&apiKey=${key}`;
	 

		 }
	if (pre<1){
		if(keyword==''){
			url = 'https://newsapi.org/v2/top-headlines?' +
			'category='+categ+
				`&pageSize=${pageSize}`+
				`&page=1`+
				`&apiKey=${key}`;}
				else{
	   
				   url = 'https://newsapi.org/v2/top-headlines?' +
				   'category='+categ+
					`&pageSize=${pageSize}`+
					`&page=${page}`+
					`&apiKey=${key}`;
			
	   
				}
	   getapi(url,1);
	
	}
	
	   else {
		if(keyword==''){
			var url = 'https://newsapi.org/v2/top-headlines?' +
			'category='+categ+
			 `&pageSize=${pageSize}`+
			 `&page=${pre}`+
			 `&apiKey=${key}`;
		}
				else{
	   
				   
					var url = 'https://newsapi.org/v2/top-headlines?' +
					'category='+categ+
					 `&pageSize=${pageSize}`+
					 `&page=${pre}`+
					 `&apiKey=${key}`;
	   
				}

		
		 
		
	   getapi(url,pre);
	   pre=pre-1;
	   next=pre+1;
	   }

}
async function getapi(url,page) {

	 
 
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
//categ='';
getapi(url2,1);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
 
// Function to define innerHTML for HTML table
function show(data) {
	 

	document.getElementById('hi').innerHTML = data.map(r => 
		` <div class="d-flex justify-content-center row">
		<div class="col-md-10" >
		</div><div class="row p-2 bg-white border rounded">
		<div class="col-md-3 mt-1" ><img class="img-fluid img-responsive rounded product-image"   src="${r.urlToImage}"></div>
	   
		  <div class="col-md-6 mt-1"> <h5>  ${r.source.name}</h5> 
		  <div class="mt-1 mb-1 spec-1"><span> ${r.content}</span></div> 
		  <a href=${r.url} target="_blank"> Read more</a>
		  </div>
		 
		  <div class="align-items-center align-content-center col-md-3 border-left mt-1">
		 <p> Publiched at :${r.publishedAt}</p>
		   	</div>  </div>
		</div> <br>`
	  ).join('')
	   


	

}
function searchnews(){

	let keyword = document.getElementById('search').value;
	   const key='9832ecfdecb64916a515132f5fb04164';
   
	var api_url  = 'https://newsapi.org/v2/everything?' +
	'q='+keyword+'&' +
	'from=2021-12-20&' +
	 'sortBy=popularity&' +
	 `pageSize=${pageSize}`+
	 `&page=${page}`+
	 `&apiKey=${key}`;

// Calling that async function

categ='';
getapi(api_url,1);

 

}

function category(cat) {
	var category1=cat;
	categ=category1;
	const key='9832ecfdecb64916a515132f5fb04164';

var api_url = 'https://newsapi.org/v2/top-headlines?category='+categ+
`&pageSize=${pageSize}`+
`&page=${page}`
+`&apiKey=${key}`;

getapi(api_url,1);

}
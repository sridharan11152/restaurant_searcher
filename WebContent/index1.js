function getresult()
{

var baseURL="https://developers.zomato.com/api/v2.1/search?entity_id=";
var endurl ="&entity_type=city&q=";
var apikey="&apikey=69356ad3b4004acc1d25c297342a041a";
var place = document.getElementById('inp').value;
let url=''.concat(baseURL,place,endurl,place,apikey);
	fetch(url)
	.then(result=>result.json())
	.then((data)=>{
		document.getElementById('msg').innerHTML=renderSearch(data);
	})
}

/*Parsing the received json file and generating the result on the jsp page*/

let renderSearch=function(data){
	var htmlText = '';
    for ( var i=0;i<19;i++ ) {
        
    	var str="" +i;
		htmlText += '<div class="container">';
		htmlText += '<div class="col_sm_4">';
		htmlText += '<p class="p-name"> Name: ' + data.restaurants[i].restaurant.name + '</p>';
		htmlText += '<p class="p-loc">Address: ' + data.restaurants[i].restaurant.location.address + '</p>';
		htmlText += '<p class="p-desc"> Cuisine type: ' + data.restaurants[i].restaurant.cuisines + '</p>';
		htmlText += "<img src="+data.restaurants[i].restaurant.thumb+"height='250' width='250'alt='image'</img>";
		htmlText += '</div>';
		htmlText += '<a href='+data.restaurants[i].restaurant.url+' target="_blank">';
		htmlText += '<input type="button" value="Visit Page" />';
		htmlText += '</a>';
		htmlText += '<button id='+str+ '>Add to Favourites list</button>';
		htmlText += '<hr>';

	}
	
	document.getElementById('msg').insertAdjacentHTML('afterend',htmlText);

/* On clicking the "Add to favourites" button,an ajax call is made to the "ajaxcontroller"
  servlet which adds the corresponding restaurant to the favourites list*/
 
    for (var j=0;j<19;j++){
	document.getElementById(j).addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[j].restaurant.name,
				id :data.restaurants[j].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
    }
	
}


/*This function is called when the user wants to view the favourites list*/

function get_favourites(){
	var htmlText = '';
   

    /*An ajax call is made to Display_favourites servlet which displays the
     * list of favourites in a new jsp page
     */
	$.ajax({
		type :'POST',
		data :{
			obj:"display"

		},
		url  :'Display_favourites',
		success: function(result){
			
			var arr =result.split("qqqq");
			for ( var i=0;i<arr.length-1; ){
				var str ="" +i; 
				htmlText += '<div class="div-container">';
				htmlText += '<div class="col_sm_4">';
				htmlText += '<p class="p-name"> Name: ' + arr[i] + '</p>';
				htmlText += '<p class="p-loc">Address: ' + arr[i+1] + '</p>';
				htmlText += '<button id='+str+ '>Remove from Favourites </button>';
				i=i+2;
			}
			document.getElementById('fa').innerHTML=htmlText;
		
            
			document.getElementById("0").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[0]
					},
					url  :'Remove_favourites',
					success: function(result){
						
						
						get_favourites();
						

					}
		            });


			})
			document.getElementById("2").addEventListener("click", function(){
				
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[2]
					},
					url  :'Remove_favourites',
					success: function(result){
						get_favourites();

					}
		            });


			})
			document.getElementById("4").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[4]
					},
					url  :'Remove_favourites',
					success: function(result){
						get_favourites();

					}
		            });


			})
			
			document.getElementById("6").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[6]
					},
					url  :'Remove_favourites',
					success: function(result){
						get_favourites();

					}
		            });


			})


			document.getElementById("8").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[8]
					},
					url  :'Remove_favourites',
					success: function(result){
						
						
						get_favourites();

					}
		            });


			})
			document.getElementById("10").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[10]
					},
					url  :'Remove_favourites',
					success: function(result){
						
						
						get_favourites();

					}
		            });


			})
			document.getElementById("12").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[12]
					},
					url  :'Remove_favourites',
					success: function(result){
						
						
						get_favourites();

					}
		            });


			})
			document.getElementById("14").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[14]
					},
					url  :'Remove_favourites',
					success: function(result){
						
						get_favourites();

					}
		            });


			})
			document.getElementById("16").addEventListener("click", function(){
				$.ajax({
					type :'POST',
					data :{
						
						id : arr[16]
					},
					url  :'Remove_favourites',
					success: function(result){
						
						
						get_favourites();

					}
		            });


			})
			
		}
		
	});
	

}







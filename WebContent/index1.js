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


let renderSearch=function(data){
	var htmlText = '';

	var str2="hello";
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





	document.getElementById("0").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[0].restaurant.name,
				id :data.restaurants[0].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("1").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[1].restaurant.name,
				id :data.restaurants[1].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("2").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[2].restaurant.name,
				id :data.restaurants[2].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("3").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[3].restaurant.name,
				id :data.restaurants[3].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("4").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[4].restaurant.name,
				id :data.restaurants[4].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("5").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[5].restaurant.name,
				id :data.restaurants[5].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("6").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[6].restaurant.name,
				id :data.restaurants[6].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("7").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[7].restaurant.name,
				id :data.restaurants[7].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("8").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[8].restaurant.name,
				id :data.restaurants[8].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("9").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[9].restaurant.name,
				id :data.restaurants[9].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("10").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[10].restaurant.name,
				id :data.restaurants[10].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("11").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[11].restaurant.name,
				id :data.restaurants[11].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("12").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[12].restaurant.name,
				id :data.restaurants[12].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("13").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[13].restaurant.name,
				id :data.restaurants[13].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("14").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[14].restaurant.name,
				id :data.restaurants[14].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("15").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[15].restaurant.name,
				id :data.restaurants[15].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("16").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[16].restaurant.name,
				id :data.restaurants[16].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("17").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[17].restaurant.name,
				id :data.restaurants[17].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})
	document.getElementById("18").addEventListener("click", function(){
		$.ajax({
			type :'POST',
			data :{
				obj:data.restaurants[18].restaurant.name,
				id :data.restaurants[18].restaurant.location.address
			},
			url  :'ajaxcontroller',
			success: function(result){
				$('#result1').html(result);
			}
		});


	})

}
function get_favourites(){
	var htmlText = '';

	$.ajax({
		type :'POST',
		data :{
			obj:"display"

		},
		url  :'Display_favourites',
		success: function(result){
			var arr =result.split("qqqq");
			for ( var i=0;i<arr.length-1; ){
				htmlText += '<div class="div-container">';
				htmlText += '<div class="col_sm_4">';
				htmlText += '<p class="p-name"> Name: ' + arr[i] + '</p>';
				htmlText += '<p class="p-loc">Address: ' + arr[i+1] + '</p>';
				i=i+2;
			}
			document.getElementById('fa').insertAdjacentHTML('afterend',htmlText);

		}
	});

}







var search = window.location.search.substr(1).split('&');
var searchKey = {};

//Split search to KEY and VALUE
for (var i = 0; i < search.length - 1; i++){
	searchKey[search[i].split('=')[0].toLowerCase()] = search[i].split('=')[1].toLowerCase();
}

if (!searchKey['id']){
    searchKey['id'] = 'Shethzor'
}

if (idList.hasOwnProperty(searchKey['id'])){
    $("#content").load('error.html');
}
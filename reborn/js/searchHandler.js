var search = window.location.search.substr(1).split('&');
var searchKey = {};

//Split search to KEY and VALUE
if (!search[0] == ""){
    for (var i = 0; i < search.length; i++){
    	searchKey[search[i].split('=')[0].toLowerCase()] = search[i].split('=')[1].toLowerCase();
    }
}

if (!searchKey['id']){
    searchKey['id'] = 'Shethzor'
}

if (!idList.includes(searchKey['id'].toLowerCase())){
    $("#content").load('error.html');
}
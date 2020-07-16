for (var navId in navigationList) {
    document.getElementById('NavButtonsTop').innerHTML += '<li class="nav-item"><a id="' + navId + '" class="nav-link" href="#">' + navId.toUpperCase() + '</a></li>';
}

$('#NavButtonsTop').click(function(event) {
    if(!userIdExist()){
        $("#content").load('error.html');
    }else{
        var tagId = $(event.target).attr('id');
        if(navigationList.hasOwnProperty(tagId)){
            $("#content").load(navigationList[tagId]);
        }
    }
});
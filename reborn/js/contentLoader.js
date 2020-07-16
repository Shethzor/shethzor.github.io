$(document).ready(function(){

    $('#NavTopButtons').click(function(event) {
        
        var tagId = $(event.target).attr('id');
        
        if(navigationList.hasOwnProperty(tagId)){

            $("#content").load(navigationList[tagId]);

        }

    });

});
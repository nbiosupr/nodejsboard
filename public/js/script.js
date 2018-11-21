$(document).ready(function(){
    $("button[name=deletePost]").click(function(){
        $("input.cb_deletePost").toggle();
        $("input[name=deleteOk]").toggle();
    });
});
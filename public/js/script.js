$(document).ready(function(){
    $("button[name=deletePost]").click(function(){
        $("input.cb_deletePost").toggle();
        $("button[name=deleteOk]").toggle();
    });
});
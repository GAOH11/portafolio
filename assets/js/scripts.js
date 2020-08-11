$(document).ready(function(){
    $("#nav_intro").click(function(){
        $("#content").load("content/intro.html");
    });
    $("#nav_project").click(function(){
        $("#content").load("content/project.html");
    });
    $("#nav_contact").click(function(){
        $("#content").load("content/contact.html");
    });

    $("#boton").click(function(){
        $("header").css("opacity", "1");
        $("#change").removeClass("fa-bars");
        $("#change").addClass("fa-times");
    });
});

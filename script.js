$(function() {
    $('#vid1').draggable({
        containment: ".cameras"
    }).resizable({
        alsoResize: "#vid1 video",
        handles: "all",
        });
    $('#vid2').draggable({
        containment: ".cameras"
    }).resizable({
        alsoResize: "#vid2 video",
        handles: "all",
        });
    $('#vid3').draggable({
        containment: ".cameras"
    }).resizable({
        alsoResize: "#vid3 video",
        handles: "all",
        });
    $('#vid4').draggable({
        containment: ".cameras"
    }).resizable({
        alsoResize: "#vid4 video",
        handles: "all",
       })
    });
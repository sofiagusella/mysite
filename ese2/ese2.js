

var stato=0;


    $("#stella").on("click", function() {

        if(stato == 0) {
            // devo andare nello stato 1, in cui il pianeta blu gira
            $("#cornice").addClass("spinning");
            stato = 1;
        } else if(stato == 1) {
            $("#cornice2").addClass("spinning2");
            stato = 2;
        } else if(stato == 2) {
            $("#cornice").addClass("contrario");
            $("#cornice2").addClass("contrario");
            stato = 3;

        }

    })

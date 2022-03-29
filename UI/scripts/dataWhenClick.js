function buttonLog(id, value) {
    // alert(id)
    date = new Date()

    $.ajax({
        async: false,
        type: "POST",
        url: "saveData.php",
        data: { "name": id, "date": date },
        //dataType: "json",
        success: function(msg) {
            // alert("success")
            // alert(msg)
            window.location.href = value;

        },
        error: function(msg) {
            alert("error");
        },


    });



}
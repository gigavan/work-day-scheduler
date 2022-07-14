$(document).ready(function () {// tells engine to load 1)html & 2)css
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
    //assign saveBtn click listener for user input
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#h8 .description").val(localStorage.getItem("h8"));
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("h")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");


    }
    hourTracker(); //re-run function
})

setInterval (changeBackground(), 1000*60*60);

function changeBackground() {
    let day = new Date();
    let hours = day.getHours();
    // let background = document.body.className;

    // Test
    // console.log(hours);

    // if (hours < 7 || hours == 23 || hours > 18) {
    //     console.log("night");
    // } else if (hours <=14) {
    //     console.log("day");
    // } else {
    //     console.log("afternoon");
    // }

    if (hours < 6 || hours > 18) {
        document.body.className = "night";

        // Styling Button
        document.getElementById("changeButton").style.backgroundColor = "rgb(160, 128, 197)";

        document.getElementById("changeButton").addEventListener("mouseover",function(){
            document.getElementById("changeButton").style.backgroundColor = "transparent";
        });

        document.getElementById("changeButton").addEventListener("mouseout", function(){
            document.getElementById("changeButton").style.backgroundColor = "rgb(160, 128, 197)";

            document.getElementById("changeButton").style.transition = "1s";
        });

    } else if (hours <= 14) {
        document.body.className = "day";

         // Styling Button
        document.getElementById("changeButton").style.backgroundColor = "#73C1EB";

        document.getElementById("changeButton").addEventListener("mouseover",function(){
            document.getElementById("changeButton").style.backgroundColor = "transparent";
        });

        document.getElementById("changeButton").addEventListener("mouseout", function(){
            document.getElementById("changeButton").style.backgroundColor = "#73C1EB";

            document.getElementById("changeButton").style.transition = "1s";
        });

    } else {
        document.body.className = "afternoon";
    
        // Styling Button
        document.getElementById("changeButton").style.backgroundColor = "#F25278";

        document.getElementById("changeButton").addEventListener("mouseover",function(){
            document.getElementById("changeButton").style.backgroundColor = "transparent";
        });

        document.getElementById("changeButton").addEventListener("mouseout", function(){
            document.getElementById("changeButton").style.backgroundColor = "#F25278";

            document.getElementById("changeButton").style.transition = "1s";
        });

    }   
}

changeBackground();
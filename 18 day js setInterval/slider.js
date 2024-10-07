let count = 0;
function slider()
{
    setInterval(runslider, 5000);

    function runslider(){
        if(count === 0){
            let selectartical = document.querySelector("#slidediv");
            selectartical.style.marginLeft = "0px";
            selectartical.style.transition = "margin-left .05s";
            count++;
        }
        else if(count ===1){
             let selectartical = document.querySelector("#slidediv");
            selectartical.style.marginLeft = "-1000px";
            selectartical.style.transition = "margin-left .05s";
            count++;
        }
        else if(count === 2){
             let selectartical = document.querySelector("#slidediv");
            selectartical.style.marginLeft = "-2000px";
            selectartical.style.transition = "margin-left .05s";
            count = 0;
        }
    }
}
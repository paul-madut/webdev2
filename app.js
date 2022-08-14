let data = [
    { 
        activity: "Bench Press",
        record:"230lbs"
    },

    { 
        activity: "Squat",
        record:"285lbs"
    },
    { 
        activity: "Deadlift",
        record:"295lbs"
    },
    { 
        activity: "Pull ups",
        record:"12 reps"
    },
    { 
        activity: "100m sprint",
        record:"11.5 seconds"
    },
    { 
        activity: "Vertical jump",
        record:"32 Inches"
    }

];

const info = document.querySelector('#info');

let details = data.map(function(lift){
    return"<div>" + lift.activity  + ": \n" + lift.record + "</div>";

});

info.innerHTML = details.join('\n');


const box = document.querySelector('#info');

function getBigger(){
    if(!box.classList.contains('hover')){
        box.classList.add("hover")
    }
}
function getSmaller(){
    if(box.classList.contains('hover')){
        box.classList.remove("hover")
    }
}

box.addEventListener("mouseenter",getBigger())
box.addEventListener("mouseleave",getSmaller())
$(function() {
    $(".create-form").on("submit", (event)=>{
        event.preventDefault();

        let newTheory = {
            media_name: $("#name").val().trim(),
            creator: $("#user").val().trim(),
            theory: $("#theoBody").val().trim(),
        };

        $.ajax("/api/theories", {
            type: "POST",
            data: newTheory
        }).then(function(){
            console.log("Added Theory");
            location.reload();
        })
    });

    $(".delete").on("click", (event)=>{
        event.preventDefault();
        let id = event.target.id

        $.ajax("/api/theories/" + id, {
            type: "DELETE",
        }).then(function(){
            console.log("Theory Deleted");
            location.reload();
        })
    });

    $(".like").on("click", (event)=>{
        event.preventDefault();
        let id = event.target.id
        let currLikes = parseInt(event.target.type);
        console.log(currLikes);
        let updateLikes = {
            likes : currLikes + 1
        }
        
        $.ajax("/api/theories/" + id, {
            type: "PUT",
            data: updateLikes
        }).then(function(){
            console.log("Added Like!");
            location.reload();
        })
    });

})
$(function () {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        let newTheory = {
            media_name: $("#name1").val().trim(),
            creator: $("#user").val().trim(),
            theory: $("#theoBody").val().trim(),
        };

        $.ajax("/api/theories", {
            type: "POST",
            data: newTheory
        }).then(function () {
            console.log("Added Theory");
            location.reload();
        })
    });

    $(".delete").on("click", (event) => {
        event.preventDefault();
        let id = event.target.id

        $.ajax("/api/theories/" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("Theory Deleted");
            location.reload();
        })
    });

    $(".like").on("click", (event) => {
        event.preventDefault();
        let id = event.target.id
        let currLikes = parseInt(event.target.type);
        console.log(currLikes);
        let updateLikes = {
            likes: currLikes + 1
        }

        $.ajax("/api/theories/" + id, {
            type: "PUT",
            data: updateLikes
        }).then(function () {
            console.log("Added Like!");
            location.reload();
        })
    });

    $(".change-title-pen").on("click", (event) => {
        let title = event.target.data-content
        let id = event.target.id
        $(".change-title").on("click", (event) => {
            console.log(id)
            event.preventDefault();
            let updateTitle = {
                media_name: $(".new-title").val().trim()
            }

            $.ajax("/api/theories/" + id, {
                type: "PUT",
                data: updateTitle
            }).then(function () {
                console.log("Changed Title!");
                location.reload();
            })
        });
    });

    $(".change-post-pen").on("click", (event) => {
    let xyz = $(".change-post-pen").attr("data")
    console.log(xyz)
    $("#name").attr("value", xyz)
    })

    $(".change-post-pen").on("click", (event) => {
        // let xyz = event.target.data-content
        let id = event.target.id
        // $("#name").attr("value", xyz)
        $(".change-post").on("click", (event) => {
            console.log(id)
            event.preventDefault();
            let updateTheory = {
                theory: $(".new-post").val().trim()
            }

            $.ajax("/api/theories/" + id, {
                type: "PUT",
                data: updateTheory
            }).then(function () {
                console.log("Changed Theory!");
                location.reload();
            })
        });
    })

})
$(function() {
  $(".btnDevour").on("click", function(event) {
    console.log(this);
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");
    var newDevouredStatus = {
      devoured: 1
    };
console.log(id);

    $.ajax("/api/devoured/" + id, {
      type: "PUT",
      data: newDevouredStatus
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log($("#burger").val());
    var newBurger = {
      burger_name: $("#burger").val().trim()
    };
    console.log("making request")
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("request response received")
        location.reload();
      }
    )
    .catch(err=>console.log(err));
  });
});
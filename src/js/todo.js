var todoTask = [
  "Find Lawn Mower Model",
  "Prepare Tomorrow Lunch",
  "Todo-list Project Review",
  "Upload CSC384",
  "IDMK Meeting"
];

$(".fa-plus").on("click", function() {
  $(this).fadeToggle(function() {
    $(".fa-minus").fadeToggle();
    $("#new-task").fadeToggle();
  });
});
$(".fa-minus").on("click", function() {
  $(this).fadeToggle(function() {
    $(".fa-plus").fadeToggle();
    $("#new-task").fadeToggle();
  });
});

$("#new-task").keydown(function(event) {
  if (event.keyCode == 13) {
    addNewTask($(this).val());
    $(this).val("");
  }
});

function addNewTask(task) {
  todoTask.push(task);
  var newTask =
    '<li><h4> <span><i class="fa fa-trash"></i></span> ' + task + "</h4></li>";
  $(".todos-list").append(newTask);
}

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
$("ul").on("click", ".fa-trash", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .parent()
    .parent()
    .fadeOut(500, function() {
      console.log($(this));
      $(this).remove();
    });
});
function init() {
  todoTask.forEach(function(task) {
    var newTask =
      '<li><h4> <span><i class="fa fa-trash"></i></span> ' +
      task +
      "</h4></li>";
    $(".todos-list").append(newTask);
  });
}
init();

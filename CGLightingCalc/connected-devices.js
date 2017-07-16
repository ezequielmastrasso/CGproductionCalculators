

var ezeProject = new Keen({
  projectId: "53eab6e12481962467000000",
  readKey: "d1b97982ce67ad4b411af30e53dd75be6cf610213c35f3bd3dd2ef62eaeac14632164890413e2cc2df2e489da88e87430af43628b0c9e0b2870d0a70580d5f5fe8d9ba2a6d56f9448a3b6f62a5e6cdd1be435c227253fbe3fab27beb0d14f91b710d9a6e657ecf47775281abc17ec455"
});

Keen.ready(function(){




  // ----------------------------------------
  // Users
  // ----------------------------------------

  var users = new Keen.Query("count_unique", {
    eventCollection: "activations",
    targetProperty: "user.id"
  });

  var geoUsers = ezeProject.run(users, function(err, res){
    $(".users").val(res.result).trigger('change');
  });







});



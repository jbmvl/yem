var Interface = new Object();




Interface.playS = function(){
	console.log("coucou");

};


var view = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  }
};

var output = Mustache.render("{{title}} spends {{calc}}", view);






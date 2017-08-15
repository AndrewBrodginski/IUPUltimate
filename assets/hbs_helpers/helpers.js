

enduro.templating_engine.registerHelper('ifTeam', function(elem,team, options) {
    
    var t = elem.team.toLowerCase();
    var team = team.toLowerCase();
    if(t === team){
      return options.fn(elem);
    }
    return options.inverse(elem);
});
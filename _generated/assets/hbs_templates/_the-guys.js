define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>The Guys</h1>\r\n\r\n<h3>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.guys : depth0)) != null ? stack1.team_name : stack1), depth0))
    + "</h3>";
},"useData":true}); });
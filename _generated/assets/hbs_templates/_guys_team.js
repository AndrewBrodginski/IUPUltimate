define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>The Guys</h1>\r\n\r\n<h3>"
    + container.escapeExpression(((helper = (helper = helpers.team_name || (depth0 != null ? depth0.team_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"team_name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n\r\n";
},"useData":true}); });
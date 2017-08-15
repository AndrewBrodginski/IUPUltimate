define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    "
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\r\n    "
    + alias4(((helper = (helper = helpers.Major || (depth0 != null ? depth0.Major : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Major","hash":{},"data":data}) : helper)))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h1>The Guys</h1>\r\n\r\n<h3>"
    + container.escapeExpression(((helper = (helper = helpers.team_name || (depth0 != null ? depth0.team_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"team_name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.team : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}); });
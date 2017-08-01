define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Testing</h1>\r\n<h2>"
    + container.escapeExpression((helpers.lorem || (depth0 && depth0.lorem) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ipsum : depth0),{"name":"lorem","hash":{},"data":data}))
    + "</h2>";
},"useData":true}); });
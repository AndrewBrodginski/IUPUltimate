define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "          <div class=\"date\">\r\n            "
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "\r\n          </div>\r\n          <div class=\"time\">\r\n              "
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "\r\n          </div>\r\n          <div class=\"event_info\">\r\n            "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\r\n            "
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "\r\n            "
    + alias2(alias1((depth0 != null ? depth0.team : depth0), depth0))
    + "\r\n          </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"mdl-grid\">\r\n  <div class=\"mdl-cell mdl-cell--8-col\">\r\n    <div class=\"main-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">"
    + alias4(((helper = (helper = helpers.main_title || (depth0 != null ? depth0.main_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main_title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n      </div>\r\n      <div class=\"mdl-card__supporting-text\">\r\n        lorem ipsum\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\">\r\n        <p>"
    + alias4(((helper = (helper = helpers.lorem || (depth0 != null ? depth0.lorem : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lorem","hash":{},"data":data}) : helper)))
    + "</h3>\r\n      </div>\r\n      <div class=\"mdl-card__menu\">\r\n        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\r\n      <i class=\"material-icons\">share</i>\r\n    </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--4-col\">\r\n    <div class=\"twitter-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Twitter</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col\">\r\n    <div class=\"calendar-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Calendar</h2>\r\n      </div>\r\n      <span class=\"mdl-card__actions mdl-card--border\"></span>\r\n      <div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Upcoming_Events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
},"useData":true}); });
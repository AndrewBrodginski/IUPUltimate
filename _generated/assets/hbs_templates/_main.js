define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"event\">\r\n          <div class=\"date\">\r\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> "
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + " @ "
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "\r\n          </div>\r\n          <div class=\"event_info\">\r\n            Tournament: "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " <br/>\r\n            Description:"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + " <br/>\r\n            Team Playing: "
    + alias2(alias1((depth0 != null ? depth0.team : depth0), depth0))
    + "<br/>\r\n          </div>\r\n        </div>\r\n        <hr/>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <script>\r\n  $(function(){\r\n      $('.js-link').click(function(){\r\n        console.log(\"clicked\");\r\n        $('.page-content').html($(this).attr('link'));\r\n      });\r\n  });\r\n</script>\r\n\r\n<div class=\"mdl-grid\">\r\n  <div class=\"mdl-cell mdl-cell--8-col\">\r\n    <div class=\"main-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">"
    + container.escapeExpression(((helper = (helper = helpers.main_title || (depth0 != null ? depth0.main_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"main_title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n      </div>\r\n      <div class=\"mdl-card__supporting-text\">\r\n        \r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\">\r\n        <h5>Interested in joining?</h5> <button id=\"joinBtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Click Here!</button>\r\n      </div>\r\n      <div class=\"mdl-card__menu\">\r\n        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\"/>\r\n      <i class=\"material-icons\">share</i>\r\n    </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--4-col\">\r\n    <div class=\"twitter-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Calendar Events</h2>\r\n        \r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\"></div>\r\n      <div class=\"events\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Upcoming_Events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
},"usePartial":true,"useData":true}); });
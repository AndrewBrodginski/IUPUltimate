define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = (helpers.ifTeam || (depth0 && depth0.ifTeam) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],"Guys",{"name":"ifTeam","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"event\">\r\n          <div class=\"date\">\r\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> "
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + " @ "
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "\r\n          </div>\r\n          <div class=\"event_info\">\r\n            Tournament: "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " <br/> Description:"
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.description : stack1), depth0))
    + " <br/> Team Playing: "
    + alias2(alias1((depth0 != null ? depth0.team : depth0), depth0))
    + "<br/>\r\n          </div>\r\n        </div>\r\n                <hr/> \r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div>\r\n          <img src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.image : depth0), depth0))
    + "\" style=\"height:150px; width:300px;\">\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<script>\r\n  $(function () {\r\n    $(\"#slideshow > div:gt(0)\").hide();\r\n\r\n    setInterval(function () {\r\n      $('#slideshow > div:first')\r\n        .fadeOut(1000)\r\n        .next()\r\n        .fadeIn(1000)\r\n        .end()\r\n        .appendTo('#slideshow');\r\n    }, 3000);\r\n\r\n  });\r\n\r\n</script>\r\n<style>\r\n  #slideshow {\r\n    margin: 80px auto;\r\n    position: relative;\r\n    padding: 10px;\r\n  }\r\n\r\n  #slideshow>div {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    right: 10px;\r\n    bottom: 10px;\r\n  }\r\n</style>\r\n\r\n<div class=\"mdl-grid\">\r\n  <div class=\"mdl-cell mdl-cell--8-col\">\r\n    <div class=\"main-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">"
    + container.escapeExpression(((helper = (helper = helpers.main_title || (depth0 != null ? depth0.main_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"main_title","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</h2>\r\n      </div>\r\n      <div class=\"mdl-card__supporting-text\">\r\n\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\">\r\n        <h5>Interested in joining?</h5> <button id=\"joinBtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"blockParams":blockParams,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">Click Here!</button>\r\n      </div>\r\n      <div class=\"mdl-card__menu\">\r\n        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"blockParams":blockParams,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\" />\r\n        <i class=\"material-icons\">share</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--4-col\">\r\n    <div class=\"twitter-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Calendar Events</h2>\r\n\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\"></div>\r\n      <div class=\"events\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Upcoming_Events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-card mdl-card mdl-shadow--2dp\">\r\n\r\n    <div class=\"mdl-card__title\">\r\n      <div id=\"slideshow\">\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slide_show : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"usePartial":true,"useData":true,"useBlockParams":true}); });
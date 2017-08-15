define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return " "
    + ((stack1 = (helpers.ifTeam || (depth0 && depth0.ifTeam) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],"Guys",{"name":"ifTeam","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n        <div class=\"event\">\r\n          <div class=\"date\">\r\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> "
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + " @ "
    + alias2(alias1((depth0 != null ? depth0.time : depth0), depth0))
    + "\r\n          </div>\r\n          <div class=\"event_info\">\r\n            Tournament: "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " <br/> Description:"
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.description : stack1), depth0))
    + " <br/> Team Playing: "
    + alias2(alias1((depth0 != null ? depth0.team : depth0), depth0))
    + "<br/>\r\n          </div>\r\n        </div>\r\n        <hr/> ";
},"4":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"link-title\">\r\n         <h4> <a href=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.link : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.title : stack1), depth0))
    + "</a></h3>\r\n        </div>\r\n        <div class=\"link-desc\">\r\n          <span>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.description : stack1), depth0))
    + "</span>\r\n        </div>\r\n       \r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"mySlides fade\">\r\n          <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" style=\"width:100%\">\r\n          <div class=\"text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"dot\" onclick=\"currentSlide"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\"></span>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"mdl-grid\">\r\n  <div class=\"mdl-cell mdl-cell--8-col\">\r\n    <div class=\"main-card welcome-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.main_title : stack1), depth0))
    + "</h2>\r\n      </div>\r\n      <div class=\"mdl-card__supporting-text\">\r\n\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\">\r\n        <h5>Interested in joining?</h5> <button id=\"joinBtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"blockParams":blockParams,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">Click Here!</button>\r\n      </div>\r\n      <div class=\"mdl-card__menu\">\r\n        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"blockParams":blockParams,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\" />\r\n        <i class=\"material-icons\">share</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet\">\r\n    <div class=\"twitter-card mdl-card mdl-shadow--2dp\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Calendar Events</h2>\r\n\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\"></div>\r\n      <div class=\"events\">\r\n        "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Upcoming_Events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"mdl-cell mdl-cell--6-col\">\r\n  <div class=\"main-card mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title\">\r\n      <h2 class=\"mdl-card__title-text\">Wanna Learn?</h2>\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\"></div>\r\n    <div class=\"links-container\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.information_links : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"mdl-cell mdl-cell--6-col\">\r\n    <div id=\"slideshow-card\" class=\"main-card mdl-card mdl-shadow--2dp\">\r\n\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Team Slideshow</h2>\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\"></div>\r\n\r\n      <div class=\"slideshow-container\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slide_show : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        <a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>\r\n        <a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>\r\n      </div>\r\n      <br>\r\n\r\n      <div style=\"text-align:center\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slide_show : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<script>\r\nvar slideIndex = 0;\r\nshowSlides();\r\n\r\nfunction showSlides() {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var dots = document.getElementsByClassName(\"dot\");\r\n    for (i = 0; i < slides.length; i++) {\r\n       slides[i].style.display = \"none\";  \r\n    }\r\n    slideIndex++;\r\n    if (slideIndex> slides.length) {slideIndex = 1}    \r\n    for (i = 0; i < dots.length; i++) {\r\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex-1].style.display = \"block\";  \r\n    dots[slideIndex-1].className += \" active\";\r\n    setTimeout(showSlides, 4000); // Change image every 2 seconds\r\n}\r\n</script>";
},"usePartial":true,"useData":true,"useBlockParams":true}); });
define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"main-card mdl-card mdl-shadow--2dp main-card\">\r\n  <div class=\"mdl-card__title\">\r\n    <h2 class=\"mdl-card__title-text\">"
    + container.escapeExpression(((helper = (helper = helpers.main_title || (depth0 != null ? depth0.main_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"main_title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n  </div>\r\n  <div class=\"mdl-card__supporting-text\">\r\n    lorem ipsum\r\n  </div>\r\n  <div class=\"mdl-card__actions mdl-card--border\">\r\n    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n      Get Started\r\n    </a>\r\n  </div>\r\n  <div class=\"mdl-card__menu\">\r\n    <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\r\n      <i class=\"material-icons\">share</i>\r\n    </button>\r\n  </div>\r\n</div>";
},"useData":true}); });
define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\r\n            mdl-layout--fixed-tabs\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"\"><a class=\"mdl-layout-title mdl-navigation__link\" href=\"\">"
    + alias1(((helper = (helper = helpers.application_name || (depth0 != null ? depth0.application_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"application_name","hash":{},"data":data}) : helper)))
    + "</a></span>\r\n    </div>\r\n\r\n    <!-- Tabs -->\r\n    <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect\">\r\n      <a id=\"tab1\" href=\"#fixed-tab-1\" class=\"mdl-layout__tab is-active\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.tab_names : depth0)) != null ? stack1.tab1 : stack1), depth0))
    + "</a>\r\n      <a id=\"tab2\" href=\"#fixed-tab-2\" class=\"mdl-layout__tab\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.tab_names : depth0)) != null ? stack1.tab2 : stack1), depth0))
    + "</a>\r\n      <a id=\"tab3\" href=\"#fixed-tab-3\" class=\"mdl-layout__tab\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.tab_names : depth0)) != null ? stack1.tab3 : stack1), depth0))
    + "</a>\r\n	    <a id=\"tab4\" href=\"#fixed-tab-4\" class=\"mdl-layout__tab\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.tab_names : depth0)) != null ? stack1.tab4 : stack1), depth0))
    + "</a>\r\n    </div>\r\n  </header>\r\n\r\n  <main class=\"mdl-layout__content\">\r\n    <section class=\"mdl-layout__tab-panel is-active\" id=\"fixed-tab-1\">\r\n      <div class=\"page-content\"></div>\r\n    </section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"fixed-tab-2\">\r\n      <div id=\"the-guys-content\"class=\"page-content\"></div>\r\n    </section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"fixed-tab-3\">\r\n      <div class=\"page-content\"></div>\r\n    </section>\r\n	<section class=\"mdl-layout__tab-panel\" id=\"fixed-tab-4\">\r\n      <div class=\"page-content\"></div>\r\n    </section>\r\n	\r\n  </main>\r\n</div> ";
},"useData":true}); });
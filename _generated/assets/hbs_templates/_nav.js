define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n  <style>\r\n    .mdl-layout__header{\r\n  background-color:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.maincolor : stack1), depth0))
    + "\r\n  \r\n}\r\n\r\n.mdl-navigation__link{\r\n  cursor:pointer;\r\n\r\n\r\n}\r\n\r\n\r\n.mdl-layout__tab-bar{\r\n	background-color:#424242;\r\n			\r\n}\r\n  </style>\r\n\r\n<!-- Always shows a header, even in smaller screens. -->\r\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <a href=\"\" class=\"mdl-layout-title mdl-navigation__link\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.application_name : stack1), depth0))
    + "</a>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <!-- Navigation. We hide it in small screens. -->\r\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n        <a class=\"mdl-navigation__link js-link\" href=\"/guys_team\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tab_names : stack1)) != null ? stack1.tab2 : stack1), depth0))
    + "</a>\r\n        <a class=\"mdl-navigation__link js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_the-girls"],depth0,{"name":"_the-girls","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tab_names : stack1)) != null ? stack1.tab3 : stack1), depth0))
    + "</a>\r\n        <a class=\"mdl-navigation__link js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tab_names : stack1)) != null ? stack1.tab4 : stack1), depth0))
    + "</a>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title mdl-navigation__link\"><a href=\"\" style=\"background-color:transparent;text-decoration:none; color:gray;\">"
    + alias2(((helper = (helper = helpers.application_name || (depth0 != null ? depth0.application_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"application_name","hash":{},"data":data}) : helper)))
    + "</a></span>\r\n    <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_the-guys"],depth0,{"name":"_the-guys","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tab_names : stack1)) != null ? stack1.tab2 : stack1), depth0))
    + "</a>\r\n        <a class=\"mdl-navigation__link js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_the-girls"],depth0,{"name":"_the-girls","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tab_names : stack1)) != null ? stack1.tab3 : stack1), depth0))
    + "</a>\r\n        <a class=\"mdl-navigation__link js-link\" link=\""
    + ((stack1 = container.invokePartial(partials["_join-page"],depth0,{"name":"_join-page","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tab_names : stack1)) != null ? stack1.tab4 : stack1), depth0))
    + "</a>\r\n    </nav>\r\n  </div>\r\n";
},"usePartial":true,"useData":true}); });
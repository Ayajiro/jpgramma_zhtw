(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{419:function(t,e,i){},441:function(t,e,i){"use strict";i(419)},456:function(t,e,i){"use strict";i.r(e);i(210),i(16),i(64),i(33),i(92),i(47),i(434);var a=i(119),n={name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var n=this;Promise.all([Promise.all([i.e(0),i.e(10)]).then(i.t.bind(null,454,7)),Promise.all([i.e(0),i.e(10)]).then(i.t.bind(null,455,7))]).then((function(i){var s=Object(a.a)(i,1)[0];s=s.default;var l=t.algoliaOptions,o=void 0===l?{}:l;s(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(o.facetFilters||[])},o),handleSelected:function(t,e,i){var a=new URL(i.url),s=a.pathname,l=a.hash,o=s.replace(n.$site.base,"/"),c=decodeURIComponent(l);n.$router.push("".concat(o).concat(c))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},s=(i(441),i(28)),l=Object(s.a)(n,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.default=l.exports}}]);
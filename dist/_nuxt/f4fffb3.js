(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1149:function(t,e,n){"use strict";n.r(e);n(117),n(189),n(48),n(20),n(187),n(13);var o=n(31),r=(n(14),n(4)),c=n(10),l=n(424),d=(n(425),n(427),n(444)),f=n(12);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=n(44),h={headers:{Accept:"application/json"}},y=Object(c.a)({head:function(){return{script:[],link:[]}},components:{},watch:{},data:function(){return{progressBar:!1,pagination:{rowsPerPage:10},dialog:!1,selected:[],headers:[{text:"",align:"left",sortable:!1},{text:"Category",value:"Category",sortable:!1,align:"left"},{text:"Title",value:"Title",sortable:!1,align:"center"},{text:"Edit",value:"Edit",sortable:!1,align:"center"},{text:"Delete",value:"Delete",sortable:!1,align:"center"},{text:"Date / Time",value:"Date / Time",sortable:!1,align:"center"}],faqs:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)({profile:"session/GET_PROFILE"})),created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressBar=!0,e.prev=1,e.next=4,m.get("https://deloitte-backend.nmgdev.com/api/fetch-faq",h);case 4:for(n=e.sent,data=[],r=0,c=Object.entries(n.data.data.faq);r<c.length;r++)l=Object(o.a)(c[r],2),l[0],d=l[1],data.push({category_id:d.category_id,category_priority:d.category_priority,categoryname:d.categoryname,created_at:d.created_at,id:d.id,updated_at:d.updated_at,value:d.value});t.faqs=data,t.progressBar=!1,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.progressBar=!1;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},mixins:[l.a],mounted:function(){var table=document.querySelector(".v-datatable tbody"),t=this;d.a.create(table,{onEnd:function(e){var n=e.newIndex,r=e.oldIndex,c=t.faqs.splice(r,1)[0];console.log(c);t.faqs.splice(n,0,c);for(var data=[],l=0,d=Object.entries(t.faqs);l<d.length;l++){var f=Object(o.a)(d[l],2),v=(f[0],f[1]);data.push(v.id)}t.fireSort(data,n,r,c.id,c.categoryname,c.value)}})},methods:{deleteItem:function(){var t=this;if(confirm("Are you sure you want to delete this item?")){for(var e=[],title=[],n=[],o=this.profile.id,r=this.profile.name,i=0;i<this.selected.length;i++){var c=this.faqs.indexOf(this.selected[i]);e.push(this.faqs[c].id),title.push(this.faqs[c].value),n.push(this.faqs[c].categoryname),this.faqs.splice(c,1)}if(e.length){var l=e.join(","),d=title.join(","),f=n.join(",");this.$axios.post("/delete-faq-selectmultiple",{ids:l,title:d,categoryname:f,name:r,profile_id:o}).then((function(e){t.$toast.success("Delete is successful")})).catch((function(t){})).finally((function(){}))}}},fireSort:function(data,t,e,n,o,title){var r=this,c=this.profile.id,l=this.profile.name;this.$axios.post("/sort-faqs",{value:data,name:l,profile_id:c,old_index:e,new_index:t,data_id:n,category_name:o,title:title}).then((function(t){r.$toast.success("Sorting is updated")})).catch((function(t){})).finally((function(){}))},fireDelete:function(t,e,n,o){var r=this;if(confirm("Are you sure you want to delete this row?")){var c=this.profile.id,l=this.profile.name;this.faqs.splice(t,1);var d=new FormData;d.append("id",e),d.append("value",n),d.append("profile_id",c),d.append("name",l),d.append("category_name",o),this.$axios.post("/delete-faq-item",d).then((function(t){r.$toast.success("Delete item is successful")})).catch((function(t){})).finally((function(){}))}}}},"watch",{}),w=(n(771),n(773),n(9)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cms-page"}},[n("div",{staticClass:"container no-padding"},[n("v-toolbar",{staticClass:"pt-4",attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[t._v("FAQ")]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"container--flex container--flex-align-item-center"})],1),t._v(" "),n("div",{staticClass:"container no-padding",staticStyle:{"background-color":"white"}},[n("v-container",{staticClass:"grey lighten-5"},[n("v-card-actions",[n("v-btn",{attrs:{color:"red"},on:{click:t.deleteItem}},[n("label",{staticClass:"white-font"},[t._v("Delete All Selected")])]),t._v(" "),n("v-spacer"),t._v(" "),n("nuxt-link",{attrs:{color:"success",to:{name:"a-cms-faqcreate"}}},[n("v-btn",{attrs:{color:"success"}},[n("label",{staticClass:"white-font"},[t._v("Create")])])],1)],1)],1),t._v(" "),n("v-container",[n("div",{staticClass:"row"},[n("div",{staticClass:"faq col-md-12"},[n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.progressBar,expression:"progressBar"}],attrs:{slot:"progress",height:"1",color:"blue",indeterminate:""},slot:"progress"}),t._v(" "),n("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.progressBar,expression:"!progressBar"}],staticClass:"elevation-1",attrs:{headers:t.headers,items:t.faqs,"items-per-page":10,"item-key":"id","select-all":"",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[n("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"props.selected"}})],1),t._v(" "),n("td",{staticClass:"handle",staticStyle:{"max-width":"28px"}},[t._v("::")]),t._v(" "),n("td",[t._v(t._s(e.item.categoryname))]),t._v(" "),n("td",[t._v(t._s(e.item.value))]),t._v(" "),n("td",{staticClass:"text-sm-center text-center"},[n("nuxt-link",{attrs:{color:"#000",to:{path:"/a/cms/faqedit",query:{edit:e.item.id}}}},[n("v-btn",{attrs:{color:"blue"}},[n("label",{staticClass:"white-font"},[t._v("Edit")])])],1)],1),t._v(" "),n("td",{staticClass:"text-sm-center text-center"},[n("v-btn",{attrs:{color:"red"},on:{click:function(n){return t.fireDelete(e.index,e.item.id,e.item.value,e.item.categoryname)}}},[n("label",{staticClass:"white-font"},[t._v("Delete")])])],1),t._v(" "),n("td",{staticClass:"text-sm-center text-center"},[t._v("\n                  "+t._s(e.item.created_at)+"\n                ")])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)])])],1),t._v(" "),n("div",{staticClass:"controls m-lg-vertical"})],1)])}),[],!1,null,"47a82534",null);e.default=component.exports},424:function(t,e,n){"use strict";n(14);var o=n(4);e.a={middleware:"authenticated",layout:"admin",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,o=t.error,e.next=3,n.dispatch("session/fetchUserProfile");case 3:return e.next=5,n.getters["session/IS_ADMIN"];case 5:e.sent||o({statusCode:404,message:"Page not found"});case 7:case"end":return e.stop()}}),e)})))()}}},425:function(t,e,n){"use strict";e.a={methods:{formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD MMM YYYY";return t?this.$moment(t).format(e):""},resetDateSelection:function(){this.dateFrom="",this.dateTo="",this.dateFromFormatted="",this.dateToFormatted=""}},watch:{dateTo:function(t){this.dateToFormatted=this.formatDate(this.dateTo)},dateFrom:function(t){this.dateFromFormatted=this.formatDate(this.dateFrom)}},computed:{hasDateSelected:function(){return this.dateFrom.length>0||this.dateTo.length>0}},data:function(){return{dateFrom:"",dateFromFormatted:"",dateTo:"",dateToFormatted:"",menuFrom:!1,menuTo:!1}}}},426:function(t,e){t.exports=function(data,t,e,n){var o=new Blob(void 0!==n?[n,data]:[data],{type:e||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),c=document.createElement("a");c.style.display="none",c.href=r,c.setAttribute("download",t),void 0===c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(r)}),200)}}},427:function(t,e,n){"use strict";n(13);var o=n(426);e.a={methods:{downloadExcel:function(){var t=this;this.isDownloading||(this.isDownloading=!0,this.$axios.get("".concat(this.currentDownloadCSVURL,"&download=1"),{responseType:"blob"}).then((function(t){o(t.data,"reports.xlsx")})).catch((function(e){t.$toast.error(e.response.data.message)})).finally((function(){t.isDownloading=!1})))}},data:function(){return{currentDownloadCSVURL:"",isDownloading:!1}}}},586:function(t,e,n){var content=n(772);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("30f2a3c6",content,!0,{sourceMap:!1})},587:function(t,e,n){var content=n(774);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("1b73ea32",content,!0,{sourceMap:!1})},771:function(t,e,n){"use strict";n(586)},772:function(t,e,n){(e=n(2)(!1)).push([t.i,".white-font[data-v-47a82534]{color:#fff}",""]),t.exports=e},773:function(t,e,n){"use strict";n(587)},774:function(t,e,n){(e=n(2)(!1)).push([t.i,"#user-transactions-page .container[data-v-47a82534]{margin:0 auto;max-width:1366px;width:98vw;padding-top:0;padding-bottom:0}.print-only[data-v-47a82534]{padding:25px 0}.print-only table[data-v-47a82534]{page-break-inside:auto}.print-only tr[data-v-47a82534]{page-break-inside:avoid;page-break-after:auto}.print-only .item-list[data-v-47a82534]{margin:0 auto!important;max-width:1366px!important;width:96vw!important;position:relative;display:block}.print-only .print-header[data-v-47a82534],.print-only .print-total-tokens[data-v-47a82534]{display:block!important}.print-only .v-toolbar[data-v-47a82534]{display:none}.print-only .white--text[data-v-47a82534]{color:#fff!important;caret-color:#fff!important}.print-only .black[data-v-47a82534]{background-color:#000!important;border-color:#000!important}.print-only .item-list[data-v-47a82534],.print-only .order-number[data-v-47a82534]{display:block}.print-only .order-number[data-v-47a82534]{font-weight:700}.print-only .cart-items table[data-v-47a82534]{border-collapse:collapse}.print-only .cart-items tr[data-v-47a82534]{background-color:#fff}.print-only .cart-items td[data-v-47a82534],.print-only .cart-items th[data-v-47a82534]{border:10px solid #e0e0e0;border-width:10px 0}.print-only .computation[data-v-47a82534]{display:none}.print-only .v-dialog--fullscreen>.v-card[data-v-47a82534]{background-color:#e0e0e0;width:100%}.print-only .v-dialog--fullscreen .v-card__text[data-v-47a82534]{padding-top:20px!important}.print-only .layout--admin #navbar[data-v-47a82534],.print-only .layout--admin .application--wrap[data-v-47a82534],.print-only .layout--admin>footer[data-v-47a82534],.print-only .layout--admin>header[data-v-47a82534]{display:none}",""]),t.exports=e}}]);
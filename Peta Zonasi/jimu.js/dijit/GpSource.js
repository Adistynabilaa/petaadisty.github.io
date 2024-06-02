// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/GpSource.html":'\x3cdiv\x3e\r\n  \x3cdiv style\x3d"display: flex;"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cinput name\x3d"gpsource_mode" id\x3d"gpsource_fromportal_${uniqueID}" data-dojo-attach-point\x3d"portalRadio" data-dojo-type\x3d"dijit/form/RadioButton"/\x3e\r\n      \x3clabel for\x3d"gpsource_fromportal_${uniqueID}" data-dojo-attach-point\x3d"portalLabel"\x3e${nls.selectFromPortal}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"margin-left: 20px;"\x3e\r\n      \x3cinput name\x3d"gpsource_mode" id\x3d"gpsource_fromurl_${uniqueID}" data-dojo-attach-point\x3d"urlRadio" data-dojo-type\x3d"dijit/form/RadioButton"/\x3e\r\n      \x3clabel for\x3d"gpsource_fromurl_${uniqueID}" data-dojo-attach-point\x3d"urlLabel"\x3e${nls.addServiceUrl}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"source-content"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"operationTip" class\x3d"operation-tip"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"hflcContainer" class\x3d"dijit-container hflc-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"flscContainer" class\x3d"dijit-container flsc-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/GpSource.html dojo/_base/lang dojo/_base/html dojo/on dojo/Evented jimu/dijit/GpChooserFromPortal jimu/dijit/_GpServiceChooserContent jimu/portalUrlUtils dijit/form/RadioButton".split(" "),function(f,g,h,k,l,b,c,d,m,n,p,q){var r=0;return f([g,h,k,m],{templateString:l,baseClass:"jimu-gp-source",declaredClass:"jimu.dijit.GpSource",nls:null,multiple:!1,portalUrl:null,uniqueID:null,mode:null,
constructor:function(){this.inherited(arguments);this.uniqueID=++r},postMixInProperties:function(){this.nls=window.jimuNls.gpSource;this.portalUrl=q.getStandardPortalUrl(this.portalUrl)},postCreate:function(){this.inherited(arguments);this._initSelf()},getSelectedItems:function(){var a=[];this.portalRadio.checked?a=this.gpcPortal.getSelectedItems():this.urlRadio.checked&&(a=this.gpcUrl.getSelectedItems());return a},startup:function(){this._started||(this.inherited(arguments),this.gpcPortal.startup(),
this.gpcUrl.startup());this._started=!0},_initSelf:function(){this._initRadios();this._createGpChooserFromPortal();this._createGpServiceChooserContent();this._onRadioClicked("url");this.own(d(this.urlRadio,"click",b.hitch(this,function(){this._onRadioClicked("url")})));this.own(d(this.portalRadio,"click",b.hitch(this,function(){this._onRadioClicked("portal")})))},_createGpChooserFromPortal:function(){this.gpcPortal=new n({multiple:this.multiple,portalUrl:this.portalUrl,style:{width:"100%",height:"100%"}});
this.gpcPortal.operationTip=this.nls.chooseItem;this.gpcPortal.placeAt(this.hflcContainer);this.own(d(this.gpcPortal,"next",b.hitch(this,function(){this.gpcPortal.operationTip=this.nls.chooseItem+" -\x3e "+this.nls.chooseTask;this._updateOperationTip()})));this.own(d(this.gpcPortal,"back",b.hitch(this,function(){this.gpcPortal.operationTip=this.nls.chooseItem;this._updateOperationTip()})));this.own(d(this.gpcPortal,"ok",b.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(d(this.gpcPortal,
"cancel",b.hitch(this,function(){this.emit("cancel")})));0<=(this.portalUrl||"").toLowerCase().indexOf(".arcgis.com")?this.portalLabel.innerHTML=this.nls.selectFromOnline:this.portalLabel.innerHTML=this.nls.selectFromPortal},_createGpServiceChooserContent:function(){this.gpcUrl=new p({multiple:this.multiple,style:{width:"100%",height:"100%"}});this.gpcUrl.operationTip=this.nls.setServiceUrl;this.gpcUrl.placeAt(this.flscContainer);this.own(d(this.gpcUrl,"ok",b.hitch(this,function(a){a&&0<a.length&&
this.emit("ok",a)})));this.own(d(this.gpcUrl,"cancel",b.hitch(this,function(){this.emit("cancel")})))},_initRadios:function(){var a="gpSourceRadios_"+this._getRandomString();this.portalRadio.name=a;c.setAttr(this.portalRadio,"id","portalRadio_"+this._getRandomString());c.setAttr(this.portalLabel,"for",this.portalRadio.id);this.urlRadio.name=a;c.setAttr(this.urlRadio,"id","urlRadio_"+this._getRandomString());c.setAttr(this.urlLabel,"for",this.urlRadio.id)},_getRandomString:function(){var a=Math.random().toString();
return a=a.slice(2,a.length)},_onRadioClicked:function(a){this.mode!==a&&(this.mode=a,"portal"===a?(this.portalRadio.set("checked",!0),this.urlRadio.set("checked",!1),c.setStyle(this.hflcContainer,"display","block"),c.setStyle(this.flscContainer,"display","none"),this.operationTip.innerHTML=this.nls.chooseItem):"url"===a&&(this.portalRadio.set("checked",!1),this.urlRadio.set("checked",!0),c.setStyle(this.hflcContainer,"display","none"),c.setStyle(this.flscContainer,"display","block"),this.operationTip.innerHTML=
this.nls.setServiceUrl,setTimeout(b.hitch(this,function(){this.gpcUrl.focusInput()}),50)),this._updateOperationTip())},_updateOperationTip:function(){if(this.portalRadio.checked){this.operationTip.innerHTML=this.gpcPortal.operationTip;var a=this.gpcPortal.browserContainer;a.style.top=0;var e=this.operationTip.clientHeight;19<=e&&(a.style.top=e-19+"px")}else this.urlRadio.checked&&(this.operationTip.innerHTML=this.gpcUrl.operationTip)}})});
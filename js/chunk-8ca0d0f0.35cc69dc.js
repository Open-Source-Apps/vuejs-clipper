(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ca0d0f0"],{"09b5":function(e,i,n){"use strict";n.d(i,"a",function(){return t}),n.d(i,"d",function(){return s}),n.d(i,"c",function(){return a}),n.d(i,"e",function(){return c}),n.d(i,"b",function(){return r});var t={initapp:{}};t.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg" />\n</div>',t.initapp.js="new Vue({\n  el: '#app'\n})",t.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",t.upload={},t.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',t.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",t.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",t.upload2={},t.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',t.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",t.result={},t.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',t.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",t.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n}',t.preview={},t.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',t.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var s={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  @load="imgLoad" \n  :style="basicStyle" \n  src="long.jpg">\n</clipper-basic>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}"},a={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},c={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"\n/>'},r={basicHtml:'<clipper-basic ref="clipper" src="ex2.jpg" />',basic:"//click buttons",fixed:"//click buttons"}},"11bf":function(e,i,n){"use strict";var t=n("4d57"),s=n.n(t);s.a},"386b":function(e,i,n){var t=n("5ca1"),s=n("79e5"),a=n("be13"),c=/"/g,r=function(e,i,n,t){var s=String(a(e)),r="<"+i;return""!==n&&(r+=" "+n+'="'+String(t).replace(c,"&quot;")+'"'),r+">"+s+"</"+i+">"};e.exports=function(e,i){var n={};n[e]=i(r),t(t.P+t.F*s(function(){var i=""[e]('"');return i!==i.toLowerCase()||i.split('"').length>3}),"String",n)}},"4d57":function(e,i,n){},ab2a:function(e,i,n){"use strict";n("b54a");var t=n("795b"),s=n.n(t);i["a"]={methods:{clipToURL:function(){var e=this;return new s.a(function(i,n){var t=e.$refs.clipper.clip();t.toBlob?t.toBlob(function(n){e.clipResult&&URL.revokeObjectURL(e.clipResult),e.clipResult=URL.createObjectURL(n),e.link=e.clipResult,e.resultDone(),i()},"image/png",1):(e.clipResult=t.toDataURL("image/png",1),e.link=e.clipResult,e.resultDone(),i())})},resultDone:function(){this.done=!0}}}},b237:function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"list-content content"},[e._m(0),n("div",{staticClass:"area"},[e._m(1),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.const,expression:"code.const"}]},[n("code",{staticClass:"javascript"})]),n("p",[e._v("If you don't know how to get the result from clipping component, see the "),n("router-link",{attrs:{to:"/examples/quick-start"}},[e._v("quick start")]),e._v(".")],1)]),n("div",{staticClass:"area"},[n("h3",[e._v("canvas.toDataURL")]),n("p",[e._v("canvas to base64 encoded string, synchronous.")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.durl,expression:"code.durl"}]},[n("code",{staticClass:"javascript"})])]),n("div",{staticClass:"area"},[n("h3",[e._v("canvas.toBlob")]),e._m(2),n("p",[e._v("canvas to blob, asynchronous.")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.blob,expression:"code.blob"}]},[n("code",{staticClass:"javascript"})]),n("h3",[e._v("URL.createObjectURL")]),n("p",[e._v("Blob to image url(DOMString), using URL.createObjectURL, synchronous.")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.url,expression:"code.url"}]},[n("code",{staticClass:"javascript"})]),n("p",[e._v("simplified")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.urles6,expression:"code.urles6"}]},[n("code",{staticClass:"javascript"})]),n("h3",[e._v("FileReader")]),n("p",[e._v("Blob to image url(base64 encoded string), using FileReader, asynchronous.")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.reader,expression:"code.reader"}]},[n("code",{staticClass:"javascript"})])]),n("div",{staticClass:"area"},[n("p",[n("button",{on:{click:e.clip}},[e._v("clip image")])]),n("p",[n("img",{staticClass:"sample",attrs:{src:e.clipResult,alt:""}})]),n("clipper-fixed",{ref:"clipper",staticClass:"sample",attrs:{src:e.src}})],1)])},s=[function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"area"},[n("h2",[e._v("Canvas to Image")]),n("p",[e._v("Since clipper component's result is only a canvas element, you might want to transform canvas to image for more usages.")]),n("p",[e._v("There are many ways you can transform canvas into images (image URL), here are some examples.")])])},function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("p",[e._v("First, we get the result (canvas) from clipping component and save it as "),n("i",[e._v("const canvas")])])},function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("p",[n("b",[e._v("IE not supported.")])])}],a=n("09b5"),c=n("ab2a"),r={extends:{mixins:[c["a"]]},data:function(){return{src:"ex1.jpg",clipResult:"",code:a["c"]}},methods:{clip:function(){this.clipToURL()}}},l=r,p=(n("11bf"),n("2877")),o=Object(p["a"])(l,t,s,!1,null,"2efc7839",null);i["default"]=o.exports},b54a:function(e,i,n){"use strict";n("386b")("link",function(e){return function(i){return e(this,"a","href",i)}})}}]);
//# sourceMappingURL=chunk-8ca0d0f0.35cc69dc.js.map
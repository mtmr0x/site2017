"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),speakersData=[{name:"Fábio Vedovelli",role:"Trabalha atualmente como Web developer para Octimine GmbH (Munique/Alemanha) e é entusiasta Vue.js",label:"@vedovelli",link:"http://twitter.com/vedovelli",photo:"assets/images/fabio-vedovelli-frontinsampa.jpg"},{name:"Bianca Brancaleone",role:"Sócia do Eu Compraria, Especialista em UX e Google Expert em UX, organizadora do GDG e Women Techmakers de Sorocaba",label:"@biab",link:"http://twitter.com/biab",photo:"assets/images/bianca-brancaleone-frontinsampa.jpg"},{name:"Raphael Fabeni",role:"Desenvolvedor na RedVentures e criador/organizador do #MeetupCSS SP",label:"@raphaelfabeni",link:"http://twitter.com/raphaelfabeni",photo:"assets/images/raphael-fabeni-frontinsampa.jpg"},{name:"Patrícia Silva",role:"Front-end Developer at MATERA Systems (Campinas/SP)",label:"@Paty_Go",link:"http://twitter.com/Paty_Go",photo:"assets/images/patricia-silva-frontinsampa.jpg"},{name:"Bruno Genaro",role:"Desenvolvedor Front-End na Cisco em Orlando/FL (USA) e organizador do OrlandoJS Meetup.",label:"@bfgenaro",link:"http://twitter.com/bfgenaro",photo:"assets/images/bruno-genaro-frontinsampa.jpg"},{name:"Hugo Bessa",role:"Desenvolvedor front-end com foco em simplicidade.",label:"@hugoBessaa",link:"http://twitter.com/hugoBessaa",photo:"assets/images/hugo-bessa-frontinsampa.jpg"},{name:"A definir",role:"",label:"",link:"/",photo:"assets/images/speaker.jpg"},{name:"A definir",role:"",label:"",link:"/",photo:"assets/images/speaker.jpg"}],timeline=[{hour:"08:00 - 09:30",title:"Credenciamento",description:"Não esqueça seu RG",speaker:"",link:""},{hour:"9:30 - 10:00",title:"Apresentação",description:"",speaker:"Matheus Marsiglio",link:""},{hour:"10:10 - 11:00",title:"Aguardando Palestra",description:"",speaker:"Raphael Fabeni",link:""},{hour:"11:10 - 12:00",title:"Aguardando Palestra",description:"",speaker:"Fábio Vedoveli",link:""},{hour:"12:00 - 13:30",title:"Almoço",description:"",speaker:"",link:""},{hour:"13:40 - 14:00",title:"Síndrome do impostor, um mal que nunca sai de moda",description:"Você já teve a sensação que não é bom o suficiente para fazer o seu trabalho? Você já fingiu entender algo, mesmo sem entender nada? Você já teve medo de alguém descobrir que você é uma fraude? Que o código ou trabalho dos seus amigos é mais rápido ou melhor? Que você programa orientado ao Google? Então, talvez seja a hora de você entender melhor do que isso se trata e como vencer esse sentimento.",speaker:"Patricia Silva",link:""},{hour:"14:10 - 15:00",title:"Renderizando componentes React no servidor",description:"O ReactJS tem a poderosa habilidade de renderizar seus componentes no servidor. Nesta apresentação Bruno irá mostrar os benefícios e também como e quando podemos explorar esta prática.",speaker:"Bruno Genaro",link:""},{hour:"15:10 - 16:00",title:" UX: quem são, o que fazem, onde vivem?",description:'"Fazer UX" está virando pré-requisito para desenvolver qualquer produto digital, mas o que está por trás disso? O que o mercado espera que a gente faça, como os chefes vendem o que a gente faz, o que os devs acham que a gente faz e o que a gente realmente faz (ou deveria fazer).',speaker:"Bianca Brancaleone",link:""},{hour:"16:10 - 16:40",title:"Coffee Break",description:"",speaker:"",link:""},{hour:"16:40 - 17:10",title:"Introdução a Elm - programação funcional no front-end",description:"",speaker:"Hugo Bessa",link:""},{hour:"17:10 - 18:30",title:"Aguardando Definição",description:"",speaker:"",link:""},{hour:"18:40",title:"Encerramento",description:"",speaker:"",link:""},{hour:"19:00",title:"?????",description:"Aguarde!",speaker:"",link:""}],timelineTemplate=function(timeline){return timeline.map(function(item,i){return'\n        <div class="timeline-block '+(0==i?"current":"")+'" data-timeline-bullet>\n          <div class="timeline-content">\n            <h3 class="text-medium">'+item.title+"</h3>\n            <p>"+item.hour+"</p>\n            <p>"+item.description+'</p>\n            <p class="timeline-speaker">'+item.speaker+"</p>\n          </div>\n        </div>\n      "}).join("")},speakerTemplate=function(speaker){return speaker.map(function(item){return'\n        <figure class="speaker-item">\n          <img src="'+item.photo+'" alt="Palestrante '+item.name+'">\n          <figcaption>\n            <p class="text-large">'+item.name+"</p>\n            <p>\n              "+item.role+'\n              <a href="'+item.link+'" aria-label="Ir ao twitter de '+item.name+'" target="_blank">'+item.label+"</a>\n            </p>\n          </figcaption>\n        </figure>\n      "}).join("")},clickMenu=function(){for(var taskItems=document.querySelectorAll("[data-menu-link]"),i=0,len=taskItems.length;i<len;i++){var taskItem=taskItems[i];contextMenuListener(taskItem)}},contextMenuListener=function(menu){var button=(document.querySelector("[data-check]"),document.querySelector("[data-menu-mobile]"));menu.addEventListener("click",function(){button.click()})},toogleInvertColor=function(){var elem=document.querySelector("[data-invert-color]");elem.addEventListener("click",function(){document.body.classList.toggle("invert-color")})},FontSize=function(){function FontSize(){return _classCallCheck(this,FontSize),this.fontSize=document.querySelector("[data-font-size]"),this.fontSizeMore=this.fontSize.querySelector("[data-font-size-more]"),this.fontSizeLess=this.fontSize.querySelector("[data-font-size-less]"),this.fontSize.hasAttribute("data-font-size-min")?this.fontSize.hasAttribute("data-font-size-max")?"number"!=typeof parseInt(this.fontSize.getAttribute("data-font-size-max"))?void console.error("data-font-size-max must be a number."):"number"!=typeof parseInt(this.fontSize.getAttribute("data-font-size-min"))?void console.error("data-font-size-min must be a number."):(this.settingsFontSizeMin=this.fontSize.getAttribute("data-font-size-min"),this.settingsFontSizeMax=this.fontSize.getAttribute("data-font-size-max"),void this.init()):void console.error("data-font-size-max is required attribute to FontSize module."):void console.error("data-font-size-min is required attribute to FontSize module.")}return _createClass(FontSize,[{key:"increaseSize",value:function(){var n=this.getBodySize();n<this.settingsFontSizeMax&&(n+=10),this.setSize(n),this.setBodySize(n)}},{key:"decreaseSize",value:function(){var n=this.getBodySize();n>this.settingsFontSizeMin&&(n-=10),this.setSize(n),this.setBodySize(n)}},{key:"setSize",value:function(size){this.fontSize.setAttribute("data-font-size",size)}},{key:"getBodySize",value:function(){return parseInt(this.fontSize.getAttribute("data-font-size"))}},{key:"setBodySize",value:function(size){document.getElementsByTagName("body")[0].style.fontSize=size+"%"}},{key:"observe",value:function(){var _this=this;this.fontSizeMore&&this.fontSizeMore.addEventListener("click",function(){_this.increaseSize()}),this.fontSizeLess&&this.fontSizeLess.addEventListener("click",function(){_this.decreaseSize()})}},{key:"init",value:function(){this.fontSize.setAttribute("data-font-size",100),this.observe()}}]),FontSize}(),Timeline=function(){function Timeline(){_classCallCheck(this,Timeline),this.timeline=document.querySelector("[data-timeline]"),this.timelineBullet=this.timeline.querySelectorAll("[data-timeline-bullet]"),this.init()}return _createClass(Timeline,[{key:"toggleBullet",value:function(bullet,bulletOrder){var bulletPosY=bullet.getBoundingClientRect().top;return bulletPosY<=window.outerHeight/2?void bullet.classList.add("current"):void(0!==bulletOrder&&bullet.classList.remove("current"))}},{key:"observe",value:function(){var _this2=this;window.addEventListener("scroll",function(){document.querySelectorAll("[data-timeline-bullet]").forEach(function(bullet,bulletOrder){this.toggleBullet(bullet,bulletOrder)}.bind(_this2))})}},{key:"init",value:function(){this.observe()}}]),Timeline}();window.onload=function(){new FontSize,clickMenu(),toogleInvertColor();var timelineContainer=document.querySelector("[data-schedule]"),speakersContainer=document.querySelector("[data-speaker]");timelineContainer.innerHTML=timelineTemplate(timeline),speakersContainer.innerHTML=speakerTemplate(speakersData),new Timeline};
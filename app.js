/**/
$( document ).ready(function() {
    vue();
});
/* */

function vue(){
    vuecomponents();
    new Vue({
        el: '#app',
        menu:['Menu1','Menu2','Menu3','Menu4'],
    });
}
function vuecomponents(){
    Vue.component('Maxmenu', {
      template: `<div class="maxmenu">
      <div class="maxmenu__body">
          <ul class="maxmenu__list">
              <li v-for="item in menu" @mouseover="menuopen" @mouseleave="menuclose"><span>{{item}}</span></li>
          </ul>
      </div>
      <div v-if="current === item && open" v-for="(item,ind) in menu" @mouseover="draweropen" @mouseleave="menuclose" class="maxmenu__drawer">
         <slot :name="['tab', ind+1].join('-')">
      </div>
  </div>`,
      data(){
          return{
            open: false,
            current: ''
          }
      },
        props:{
            menu: {
                type: Array
            }
        },
      methods: {
        menuopen(e){
            this.current = e.target.innerText;
            let self = this;
            setTimeout(function() {
                self.open=true;
            }, 500);
            console.log(e.target.innerText);
        },
        menuclose(){
            let self = this;
            setTimeout(function() {
                self.open=false;
            }, 500);
            
        },
        draweropen(e){
            let self = this;
            if(e.target.tagName=='DIV'){
                setTimeout(function() {
                    self.open=true;
                }, 500);
            }
        },
      },
  })        
}

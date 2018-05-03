export default {
   install(Vue, options) {
      Vue.prototype.$percentStyle = function(obj,pObj){
         const w = (pObj) ? pObj.width : 976;
         const h = (pObj) ? pObj.height : 656;

         const s = {};

         if (!obj) return null;

         s.position = 'absolute';
         s.zIndex = '10';

         if (obj.image) {
            s.backgroundImage = `url(${obj.image})`;
            s.backgroundRepeat = 'no-repeat';
            s.backgroundSize = 'cover';
            s.backgroundPosition = 'center center';
         }

         if (obj.width) {
            s.width = `${obj.width/w * 100}%`;
         }

         if ( obj.height ){
            s.height = `${obj.height/h * 100}%`;
         }

         if ( obj.x ){
            s.left = `${obj.x/w * 100}%`;
         }

         if ( obj.y ){
            s.top = `${obj.y/h * 100}%`;
         }

         if ( obj.rotation ){
            s.transform = `rotate(${obj.rotation}deg)`;
            s.transformOrigin = '0% 0%';
         }

         if ( obj.paddingTop&&obj.width ){
            s.paddingTop = ( obj.paddingTop / obj.width * 100 ) + "%";
         }

         if ( obj.marginBottom&&obj.width ){
            s.marginBottom = ( obj.marginBottom / obj.width * 100 ) + "%";
         }

         if( obj.boxShadow ){
            s.boxShadow = obj.boxShadow;
         }

         return s;
      }


   }
}

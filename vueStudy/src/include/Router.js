// import Router from 'vue-router'


// Router.prototype.open = function({
//   name = '',
//   path = '',
//   query = null
// }) {
//   const host = window.location.origin;
//   let queryString = '?';
//   let urn = '';
//   if (name) {
//     urn = this.options.routes
//     ? this.options.routes.find(val => val.name == name).path
//     : '';
//   }else if(path){
//     urn = path;
//   }else{
//     console.error('Error:[Router.open] missed path or router name');
//   }
//   if (query) {
//     for (let i in query) {
//       queryString += i + '=' + query[i] + '&';
//     }
//     queryString = queryString.slice(0,queryString.length-1);
//   }
//   window.open(host + urn + (query ? queryString : ''));
// }
// const router = new Router({
//   mode: 'history',
//   base: __dirname,
//   routes: routerMap,
//   scrollBehavior (to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   }
// });

// export default routerOpen

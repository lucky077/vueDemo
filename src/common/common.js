function commonJs(Vue){

  Vue.prototype.copy = (src, target) => {
    for (const field in src) {
      target[field] = src[field];
    }
  };

}


export default commonJs
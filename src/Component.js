class Component{
  constructor(prop){
    this.prop = prop;
  }
  render(){
    console.log('render: '+this.prop);
  }
}

//module.exports = Component;
export default Component;
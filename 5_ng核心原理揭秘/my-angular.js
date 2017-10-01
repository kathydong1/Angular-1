window.onload=function (){
  let aEle=document.getElementsByTagName('*');
  let arrApp=[];

  for(let i=0;i<aEle.length;i++){
    if(aEle[i].getAttribute('ng-app')!=undefined){
      arrApp.push(aEle[i]);
    }
  }

  //处理ng-app
  arrApp.forEach(app=>{
    function findDirective(directive){
      let arr=[];
      Array.from(app.getElementsByTagName('*')).forEach(ele=>{
        let str=ele.getAttribute(directive);

        if(str){
          arr.push({name: str, ele});
        }
      });

      return arr;
    }




    let $scope={};

    //找到所有的ng-model
    let models=findDirective('ng-model');

    //数据->html
    function apply(){
      for(let name in $scope){
        models.forEach(json=>{
          if(json.name==name){
            json.ele.value=$scope[name];
          }
        });

        binds.forEach(json=>{
          let str=json.name;

          for(let name in $scope){
            str=str.replace(new RegExp(name, 'g'), `$scope.${name}`);
          }

          try{
            json.ele.innerHTML=eval(str);
          }catch(e){
            json.ele.innerHTML='';
          }
        });
      }
    }

    //html->数据
    models.forEach(json=>{
      json.ele.oninput=function (){
        $scope[json.name]=this.value;

        apply();
      };
    });

    //ng-bind
    let binds=findDirective('ng-bind');
  });
};

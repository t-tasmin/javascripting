 

// const foo = (List) => {
    
//   for (let i in List){
//       if (i%2==0)
//       {List[i]+=1;}
//       else
//       {
//          List[i]-=1; }
//   }   
  
//   return List;
  
// }
// console.log(foo([10, 10, 10, 10, 10])) ;


// function minArgs(){

  // let args = Array.from(arguments);
  
  // let min = args[0];

//   for(let i =0; i< args.length; i++){
//      if (args[i]<min){
//        min=args[i];
//      }
//   }
//   return min;

// }

// console.log(minArgs(1, -6, 78, 12, 45.5, -6.9));

// let Array1 =  [1, 4, -5, 2, 1];
// console.log(minArgs(...Array1));


function group (collection, grouper){

  let Obj = {};
  for (let i in collection){
      const element= grouper(collection[i]);
      console.log(element);

      if (element in Obj){
        Obj[element].push(collection[i]);
      }
      else{
        Obj[element]=[collection[i]];
      }

  }

  return Obj;

}

console.log(group([6.5, 4.2, 6.3], Math.floor));
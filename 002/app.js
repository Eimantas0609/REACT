console.log('Labas')
const data = [
   {id: 1, type: 'man', name: 'Lina', color: 'blue'},
   {id: 2, type: 'car', name: 'Opel', color: 'red'},
   {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
   {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
   {id: 5, type: 'man', name: 'Tomas', color: 'green'},
   {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
   {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
   {id: 8, type: 'car', name: 'MB', color: 'blue'},
   {id: 9, type: 'car', name: 'ZIL', color: 'red'},
   {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
 ];

  data.forEach(e => console.log(e.name))
 
const orange = data.map(e => e.color == 'red' ? {...e,color:'orange'} : {...e})
console.log(orange)
const car = data.map(e => e.type == 'car' && e.id % 2 == 0 ? {...e,color:'black'} :{...e} )
console.log(car)
const lengthName = data.map(e => e.name.length < 4 ? {...e,name: e.name.padEnd(8, '*')} : {...e})
console.log(lengthName)

const data2 = [

   {id: 1, list: [8, 8, 22]},

   {id: 2, list: [74, 5, 220, 7]},

   {id: 3, list: [8, 1, 0, 0, 8, 22]}

 ];

 const d22 = data2.map(e => ({...e,list: [...e.list, 0]}));
 console.log(d22)

 const d5 = data.filter(e => e.color = 'red')
 console.log(d5)
 const d6 = data.filter(e => e.type != 'animal')
 console.log(d6)
 data.filter(e => e.type == 'animal').forEach(a => console.log(a.name))

 const green = data.filter(e => e.type == 'animal' && e.color == 'green')
 console.log(green)

 const d8 = data.filter(e => e.type == 'man' || e.type =='car')
 .map(e => e.color != 'red' ? {...e, color : 'black'} : {...e} );
   
   console.log(d8);

   const d13 =[...data]
   d13.sort((a, b) => b.name.length - a.name.length);
   console.log(d13)

   const d14 =[...data];
   d14.sort((_, b) => b.type !== 'car' ? -1 :1)
   console.log(d14)
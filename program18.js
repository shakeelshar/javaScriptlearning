// array of  objects 


var student = [
    {name: 'Shakeel Ahmed', age: 25, department : "commputer Science"},
    {name: 'jameel Ahmed', age: 28,department : "commputer Science"},
    {name: 'khalil Ahmed', age: 15,department : "commputer Science"},
    {name: 'adeel Ahmed', age: 25,department : "commputer Science"}
  ];

  console.log(student);

  for(a=0;  a<student.length; a++){
    document.write(student[a].name + " "+ student[a].age+ " "+student[a].department+ "<br>");
  }
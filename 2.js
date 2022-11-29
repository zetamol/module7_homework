function properName(obj, objKeyName) {
    return (objKeyName in obj);
}

const president = {
    name: "John", 
    surname: "Kennedy",
    age: 44,
    country: "USA"
  };

  console.log(properName(president, "name"));
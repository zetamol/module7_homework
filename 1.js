const mrPresident = function(a) {
    a = {Имя: 'John',
    Фамилия: 'Kennedy',
    Возраст: '44'}
  for (let key in a) {
    console.log(key+ ': ' + a[key]);
  }
    
   }
  mrPresident();
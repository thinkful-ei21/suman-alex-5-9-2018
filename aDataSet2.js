const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne: function(query){
        return this.store.heroes.find(hero => this.checkEachKeyValPair(hero,query));
      },
    checkEachKeyValPair: function (hero,query){  
        let count =0;
        for(let i =0 ;i < Object.keys(query).length; i++){
          let key = Object.keys(query)[i];
          if(query[key] === hero[key])
            count++;
        }
        if(count === Object.keys(query).length)
          return hero;
    }   
  };

  
  
  console.log(Database.findOne({ id: 2 }));
const Classifications = {
  Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  Warmblooded: ['Bear', 'Whale', 'Ostrich'],
  Coldblooded: ['Salmon', 'Turtle'],
  Mammal: ['Bear', 'Whale'],
  Bird: ['Ostrich']
}

const Animals = {
  Bear:	['Vertebrate', 'Warm-blooded','Mammal'],
  Turtle:	['Vertebrate', 'Cold-blooded'],
  Whale:	['Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon:	['Vertebrate', 'Cold-blooded'],
  Ostrich:	['Vertebrate', 'Warm-blooded', 'Bird']
}

document.addEventListener('DOMContentLoaded',event => {
  let form = document.getElementById('selection-filters');
  let classifications = document.getElementById('animal-classifications');
  let animals = document.getElementById('animals');

  classifications.addEventListener('input', event => {
    let currentClassifictaion = classifications.value.replace(/\-/g,'')
    console.log(currentClassifictaion);
    if (currentClassifictaion !== 'Classifications') {
      let animalList = Classifications[currentClassifictaion];
      console.log(animalList)
      let animalOption = animals.children;
      hide(animalOption, animalList)
    }
  })
  
})



function hide(elementCollection, targetCollection) {
  for (let i = 0; i < elementCollection.length; i +=1 ) {
    if (targetCollection.includes(elementCollection[i].value)) {
      elementCollection[i].removeAttribute('hidden');
    } else {
      elementCollection[i].setAttribute('hidden','hidden');
      elementCollection[i].removeAttribute('selected');
    }
  }
}

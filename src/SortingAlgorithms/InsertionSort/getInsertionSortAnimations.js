const getInsertionSortAnimations = (array) => {
  const animations = []; // { comparingELement1, comparingElement2, keyIndex, doSwap, sortedTill,placeKey }

  // Push animation for sorting first element.
  // animations.push(0, 0, false, false, 0);

  for (let i = 1; i < array.length; i++) {
    let key = array[i],
      j = i - 1;  

    // Push animation for comparing 2 elements
    animations.push(i, j, array[i], false, i-1,false);
    while (j >= 0 && array[j] > key) {
      // Swapping 2 values
      [array[j + 1]] = [ array[j]];
      // Push animation for comparing 2 elements
      animations.push(j, j + 1,null, false, i,false);
      // Push animation for swapping 2 elements
      animations.push(j, j + 1,null, true, i,false);
      j--;
    }
    array[j+1]=key;
    animations.push(j+1,j+1,null,false,i,true)

  }


  // Push animation to know that it's the end of the animations.
  animations.push(array.length - 1, array.length - 1,null,false, array.length - 1,false);
  return animations;
};

export default getInsertionSortAnimations;

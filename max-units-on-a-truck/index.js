/**
 * ref - https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * You are assigned to put some amount of boxes onto one truck.
 * You are given a 2D array boxTypes,
 * where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
 *
 *  - numberOfBoxesi is the number of boxes of type i.
 *  - numberOfUnitsPerBoxi is the number of units in each box of the type i.
 *
 * You are also given an integer truckSize, which is the maximum number of
 * boxes that can be put on the truck. You can choose any boxes to put on
 * the truck as long as the number of boxes does not exceed truckSize.
 *
 * Return the maximum total number of units that can be put on the truck.
 */

var maximumUnits = function (boxTypes, truckSize) {
  let loadedBoxes = 0;
  let unitCount = 0;

  // sort boxtypes based on item per box
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let boxType of boxTypes) {
    const avaialbleBoxSpace = truckSize - loadedBoxes;
    const numOfBoxes = boxType[0];
    const unitPerBox = boxType[1];

    if (numOfBoxes < avaialbleBoxSpace) {
      unitCount += numOfBoxes * unitPerBox;
      loadedBoxes += numOfBoxes;
    } else {
      unitCount += avaialbleBoxSpace * unitPerBox;
      loadedBoxes += avaialbleBoxSpace;
      break;
    }
  }

  return unitCount;
};

module.exports = maximumUnits;

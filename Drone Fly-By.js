// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    const lampsLength = lamps.length;
    const droneLength = drone.length;
    const lampsOff = lampsLength - droneLength;
    return droneLength >= lampsLength ? 'o'.repeat(lampsLength) :'o'.repeat(droneLength) + 'x'.repeat(lampsOff);
}
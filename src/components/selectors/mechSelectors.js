const WEIGHT_CLASSES = [
    {name: 'Light', weight: [20, 25, 30, 35]},
    {name: 'Medium', weight: [40, 45, 50, 55]},
    {name: 'Heavy', weight: [60, 65, 70, 75]},
    {name: 'Assault', weight: [80, 85, 90, 95, 100]}
];

export const getWeightClass = weight => {
  const weightClass = WEIGHT_CLASSES.find(wc => wc.weight.includes(weight)) || {name: 'Unknown'};
  return weightClass.name;
};
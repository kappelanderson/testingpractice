export default function analyzearray(arr){
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
    return {
        average: sumWithInitial / arr.length,
        min: Math.min.apply(null,arr),
        max: Math.max.apply(null,arr),
        length: arr.length
      }
}


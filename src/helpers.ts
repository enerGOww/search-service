export function convertDateToNormalFormat(date: string) {
  return date
    .slice(0, 10)
    .split('-')
    .reduceRight((accumulator, partOfDate) => `${accumulator}.${partOfDate}`, '')
    .substr(1)
}

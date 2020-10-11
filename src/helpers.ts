export function convertDateToNormalFormat(date: string): string {
  return date
    .slice(0, 10)
    .split('-')
    .reduceRight((accumulator, partOfDate) => `${accumulator}.${partOfDate}`, '')
    .substr(1);
}

export function updateStorageByKeyAndState(key: string, state: object): void {
  localStorage.setItem(key, JSON.stringify(state));
}

export function getStorageDataByKey(key: string): object {
  const data = localStorage.getItem(key) || '{}';
  return JSON.parse(data);
}

export function objectToMap(object: object): Map<any, any> {
  return new Map(Object.entries(object));
}

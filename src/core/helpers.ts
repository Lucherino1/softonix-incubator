export function groupBy<T, K extends keyof any> (
  array: T[],
  getKey: (item: T) => K | K[]
): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const keys = getKey(item)
    const keyArray = Array.isArray(keys) ? keys : [keys]

    keyArray.forEach((key) => {
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(item)
    })

    return acc
  }, {} as Record<K, T[]>)
}

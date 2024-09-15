/* Реалізуйте дженерік версію методу масивів Array.push.
Для перевірки наведіть курсор на pushCheck */

type TPush<T extends Array<any>, U> = [...T, U]

const pushCheck: TPush<[1, 2], '3'> = [] //  [1, 2, '3']

const pushCheck2: TPush<[3, 4, 5], 'any'> = [3, 4, 5, 'any']

export {
  pushCheck,
  pushCheck2
}

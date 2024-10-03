interface IContact {
  id: number
  name: string
  description: string
  image?: string
}
interface ITableContact extends IContact {
  editMode: boolean
  localCopy: IContact
}

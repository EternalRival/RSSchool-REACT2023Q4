import { v4 } from 'uuid'

export const getUUID = (): string => (v4 as () => string)()

import { getPersons } from '../../store/apis/queries/getPersons.ts'

export default async function mainLoader() {
    const details = await getPersons()

    return { details }
}
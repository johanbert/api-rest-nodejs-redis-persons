import { Router, Request, Response } from 'express';
import { ENDPOINTS } from '../global/endpoints';
import Person from '../classes/person'
const router = Router();

// createPerson
router.post(ENDPOINTS.createPerson, ( req: Request, res:Response )=>{
    const person = new Person();
    person.createPerson(req.body)
    .then(() => res.status(201).json({ ok: true }))
    .catch((err:any) => res.status(500).json({ error: 'Internal Server Error', description: err }))
})
// getPersons
router.get(ENDPOINTS.getPersons, ( req: Request, res:Response )=>{
    const person = new Person();
    person.readPersons()
    .then((response:any) => res.status(200).json( response ))
    .catch((err:any) => res.status(500).json({ error: 'Internal Server Error2', description: err }))
})
// updatePerson
router.patch(ENDPOINTS.updatePerson, ( req: Request, res:Response )=>{
    const person = new Person();
    person.updatedPersons(req.body)
    .then(() => res.status(200).json({ ok: true }))
    .catch((err:any) => res.status(500).json({ error: 'Internal Server Errorr', description: err }))
})

export default router;
import { Router, Request, Response } from 'express';
import { ENDPOINTS } from '../global/endpoints';

const router = Router();

router.get(ENDPOINTS.getPersons, ( req: Request, res:Response )=>{
    res.json({
        ok: true,
        message: 'POST - Ready'
    })
})

router.post(ENDPOINTS.getPersons, ( req: Request, res:Response )=>{
    const body = req.body.body;
    const from = req.body.from;
    res.json({
        ok: true,
        message: 'All be fine!',
        body,
        from
    })
})
router.post(ENDPOINTS.getPerson, ( req: Request, res:Response )=>{
    const body = req.body.body;
    const from = req.body.from;
    const id = req.params.id;
    res.json({
        ok: true,
        message: 'All be fine!',
        body,
        from,
        id
    })
})

export default router;
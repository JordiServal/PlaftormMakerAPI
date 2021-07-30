import {
    Request,
    Response,
    NextFunction
} from "express";

export const GetMap = async (req: Request, res: Response, next: NextFunction) => {
    const mongo = res.locals.mongo;
    const { name } = req.params;

    const map = await mongo.get('maps', 'name', name)
    res.json(map)
}

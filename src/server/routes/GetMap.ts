import {
    Request,
    Response,
    NextFunction
} from "express";

export const GetMap = async (req: Request, res: Response, next: NextFunction) => {
    const mongo = res.locals.mongo;

    const map = await mongo.get('maps', 'name', 'Test')
    console.log(map);
    res.json(map)
}

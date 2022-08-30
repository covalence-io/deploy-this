import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        { name: "Vercel", isComplete: true },
        { name: "Heroku", isComplete: true },
        { name: "DigitalOcean", isComplete: true },
        { name: "AWS", isComplete: false }
    ]);
}

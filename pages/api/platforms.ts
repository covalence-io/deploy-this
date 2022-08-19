import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        { name: "Vercel", isComplete: true },
        { name: "Heroku", isComplete: false },
        { name: "DigitalOcean", isComplete: false },
        { name: "AWS", isComplete: false }
    ]);
}

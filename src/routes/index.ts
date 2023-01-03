import express, { Request, Response } from "express";
import path from "path";
import resize from "./api/sharp";
import validator from "./api/validator";

const routes = express.Router();


interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

routes.get("/images", async (req: Request, res: Response) : Promise<void> => {
	const params: Query = req.query;
	console.log(params);

	const val: null | string = await validator(params);
	console.log(`val ${val}`);
	if (val === "Thumb does  exists") {
		res.sendFile(
			path.join(
				__dirname,
				`../../assets/images/full/cache/${params.width}x${params.height}${params.filename}`
			)
		);
	} else if (val) {
		res.send(val);
	}

	if (val === null) {
		await resize(params);
		setTimeout(() => {
			res.sendFile(
				path.join(
					__dirname,
					`../../assets/images/full/cache/${params.width}x${params.height}${params.filename}`
				)
			);
		}, 1000);
		
			





	}
});

export default routes;

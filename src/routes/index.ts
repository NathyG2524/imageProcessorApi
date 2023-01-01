import express, { Request, Response } from "express";
import path from "path";
import sharp from "sharp";
import validator from "./api/validator";

const routes = express.Router();

routes.get("/test", (req, res) => {
	res.send("main api route");
});

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

routes.get("/images", async (req: Request, res: Response) => {
	const params: Query = req.query;
	console.log(params);

	const val: null | string = await validator(params);
	console.log(`val ${val}`);
	if (val === "Thumb does  exists") {
		res.sendFile(path.join(__dirname,`../../assets/images/full/cache/${params.width}x${params.height}${params.filename}`));
	}
	else if (val) {
		res.send(val);
	}
	
	if (val == null) {
		console.log("sharp");
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const ans: unknown = await sharp(`./assets/images/full/${params.filename}`)
			.resize(Number(params.width), Number(params.height))
			.toFile(`./assets/images/full/cache/${params.width}x${params.height}${params.filename}`, function (err) {
				// output.jpg is a 300 pixels wide and 200 pixels high image
				// containing a scaled and cropped version of input.jpg
			});
		setTimeout(() => {
			res.sendFile(path.join(__dirname,`../../assets/images/full/cache/${params.width}x${params.height}${params.filename}`));

		}, 1000);
	}
});

export default routes;

import sharp from "sharp";

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

const resize = async (params: Query): Promise<string> => {
	sharp(`./assets/images/full/${params.filename}`)
		.resize(Number(params.width), Number(params.height))
		.toFile(
			`./assets/images/full/cache/${params.width}x${params.height}${params.filename}`,
			function () {
				// output.jpg is a 300 pixels wide and 200 pixels high image
				// containing a scaled and cropped version of input.jpg
			}
		);
	return `./assets/images/full/cache/${params.width}x${params.height}${params.filename}`;
};

export default resize;

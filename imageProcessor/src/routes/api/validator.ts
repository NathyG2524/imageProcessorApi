import fs from "fs";

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

const validator = async (query: Query): Promise<string | null> => {
	if (!query.height || !query.width) {
		return "Please specify size.";
	}

	if (query.height && query.width) {
		const height: number = parseInt(query.height);
		if (Number.isNaN(height) || height < 1) {
			return "Please enter a valid height";
		}

		const width: number = parseInt(query.width);
		if (Number.isNaN(width) || width < 1) {
			return "Please enter a valid width";
		}
	}

	if (!query.filename) {
		return "Please enter a filename";
	}

	const file = `./assets/images/full/${query.filename}`;
	if (!fs.existsSync(file)) {
		// console.error(err);
		return "File does not exists";
	}

	const cache = `./assets/images/full/cache/${query.width}x${query.height}${query.filename}`;
	if (fs.existsSync(cache)) {
		// console.error(err);
		return "Thumb does  exists";
	}
	return null;
};
export default validator;

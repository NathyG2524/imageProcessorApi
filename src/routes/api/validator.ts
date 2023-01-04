import fs from 'fs';

interface Query {
  filename?: string;
  width?: string;
  height?: string;
}

const validator = async (query: Query): Promise<string | null> => {
  if (!query.height || !query.width) {
    return 'Please specify size.';
  }

  if (query.height && query.width) {
    const height: number = +(query.height as string);
    if (Number.isNaN(height) || height < 1) {
      return 'Please enter a valid height';
    }

    const width: number = +(query.width as string);
    if (Number.isNaN(width) || width < 1) {
      return 'Please enter a valid width';
    }
  }

  if (!query.filename) {
    return 'Please enter a filename';
  }

  const file = `./assets/images/full/${query.filename}`;
  if (!fs.existsSync(file)) {
    return 'File does not exists';
  }

  const cache = `./assets/images/full/cache/${query.width}x${query.height}${query.filename}`;
  if (fs.existsSync(cache)) {
    return 'Thumb does  exists';
  }
  return null;
};
export default validator;

import path from 'path';
import webpack from 'webpack';
const config: webpack.Configuration = {
	mode: 'development',
	entry: './build/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};
export default config;

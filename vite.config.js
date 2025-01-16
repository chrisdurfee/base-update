import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	base: '/base-update/',
	server: {
		open: true
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@shell': path.resolve(__dirname, 'src/shell'),
		}
	}
});

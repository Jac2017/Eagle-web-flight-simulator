import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';

export default defineConfig({
	plugins: [cesium()],
	base: './',  // Relative paths so dist/ works from any directory/server
	build: {
		outDir: 'dist',
		assetsInlineLimit: 8192,  // Inline small assets as base64
		rollupOptions: {
			output: {
				// Keep everything in a clean structure
				assetFileNames: 'assets/[name]-[hash][extname]',
				chunkFileNames: 'assets/[name]-[hash].js',
				entryFileNames: 'assets/[name]-[hash].js',
			}
		}
	},
	server: {
		host: '0.0.0.0',  // Accessible from mobile devices on same network
		port: 3000,
	}
});

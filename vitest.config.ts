import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: `jsdom`,
		include: [`**/*.{test,spec}.ts`],
		exclude: [
			`**/node_modules/**`,
			`**/dist/**`,
			`**/lib/**`,
			`**/cypress/**`,
			`**/.{idea,git,cache,output,temp}/**`,
			`**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*`,
		],
		coverage: {
			reporter: [`json`],
		},
	},
});

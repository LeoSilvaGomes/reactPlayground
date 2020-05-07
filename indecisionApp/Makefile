BABELUP := babel src/app.js --out-file=public/scripts/app.js --presets=env,react 


update-app: .
	$(BABELUP)

watch-update:
	$(BABELUP) --watch

run: .
	live-server public

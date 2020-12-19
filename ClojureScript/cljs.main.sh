# Grunt with LiveReload extension for browser will reload the page for us. Use F12 to check the console.
grunt &
lein run -m cljs.main --watch src --compile test.core --repl

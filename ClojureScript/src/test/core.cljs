(ns test.core)

(enable-console-print!)

(defn hello
  []
  "Hello There")

(println "Hello worlds in REPL!")

(js/console.log "Now? When? Cool! Then?")
(js/console.log "Lovely Leiningen!")
(js/console.log "And much more!")
(js/console.log "And much more and more!")
(js/console.log "Sometimes even less than we think that we think!")

(js/console.log (document.getElementsByTagName "html"))
(js/console.log (document.getElementsByTagName "h1"))
(js/console.log (document.getElementsByTagName "div"))


(-> js/document.body.innerHTML (set! "Hello Clojure!!!")) ; Big cleaning!

(js-obj "HTML" "Hello Clojure!!!") ; Sets new content for element

;; (js/alert "Ready for Fibonacci? Check the console: F12!")
(defn fib [n]
  (if (< n 2) n (+ (fib (- n 1))
                   (fib (- n 2)))))
(println (fib 35))
(println (hello))
(js/console.log (fib 25))
(-> js/document.body.innerHTML (set! (fib 25))) ; Big cleaning!

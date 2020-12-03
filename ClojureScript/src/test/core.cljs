(ns test.core)

(println "Hello worlds in repl!")

(js/console.log "Now? When? Cool! Then?")
(js/console.log "Lovely Leiningen!")
(js/console.log "And much more!")
(js/console.log "And much more and more!")
(js/console.log "Sometimes even less than we think that we think!")

(js/console.log (document.getElementsByTagName "p"))

(js/alert "Ready for Fibonacci? Check the console: F12!")
(defn fib [n]
  (if (< n 2) n (+ (fib (- n 1))
                   (fib (- n 2)))))
(println (fib 25))
(js/console.log (fib 25))

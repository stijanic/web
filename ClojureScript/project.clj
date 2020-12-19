;; Help: lein trampoline run -m figwheel.main -h
;; Run and Repl: lein trampoline run -m figwheel.main
;; Run and Repl using alias: lein fig -- -b test.core -r
(defproject test "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :profiles {:dev {:dependencies
                   [[org.clojure/clojure "1.10.0"]
                    [org.clojure/clojurescript "1.10.773"]
                    [com.bhauman/figwheel-main "0.2.12"]
                    [com.bhauman/rebel-readline-cljs "0.1.4"]]}}
  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]})

## Install and run just this example

```bash
# install 
url='https://raw.githubusercontent.com/ericwegscheid/code-exercises/master/ruby/classes/'
for f in index.rb car.rb camaro.rb; do curl $url$f -o $f && chmod +x $f; done

# run
./index.rb

# if `env` is unable to find the ruby interpreter on your system
/path/to/ruby index.rb
```

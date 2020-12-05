array = [["john", 20], ["sam", 23], ["claire", 30]]

array = array.map do |key_value|
  key_value = {name: key_value[0], age: key_value[1]}
end

p array

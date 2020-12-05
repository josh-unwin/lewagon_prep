def file_reader(path)
  File.open(path).read.strip
end


def count_words(string)
  words = string.split(" ")
  frequency = Hash.new(0)

  words.each { |word| frequency[word.gsub(/\W+/, '').downcase] += 1 }
  frequency
end

# p count_words(file_reader("text.txt"))

p file_reader("text.txt")

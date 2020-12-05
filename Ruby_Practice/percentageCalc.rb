def sanity_check(num,percent)
    if num / num == 1 && percent / percent == 1
        return true
    else
        return false
        puts "Did you enter a number for the value and percentage?"
    end
end

def percentCalc(num,percent)
    result = (num / 100) * percent
    return result
end

# Start of program
puts "Please enter a number followed by the percentage you want, such as 100 10%:"
user_input = gets.chomp.split

num = user_input[0].to_i
percent = user_input[1].gsub("%","").to_i

sanity_check(num,percent)
puts "#{percent}% of #{num} is " + percentCalc(num,percent).to_s




require 'date'

def get_name
    full_name = gets.chomp
    
    if full_name.split.length >= 2
        surname = full_name.split.pop
    else
        while full_name.split.length < 2 
            puts "Hmm, did you enter a first name and surname? Please try again:"
            full_name = gets.chomp
            surname = full_name.split.pop
        end
    end
    return full_name
end

def age_calc
    dob = gets.chomp
    date = Date.today

    if dob.length == 10
        dob = dob.split("/")   
        dob_date = Date.new(dob[2].to_i, dob[1].to_i, dob[0].to_i)
        age = date - dob_date
        puts dob_date
        puts date
        puts age.to_i/365
    end
end

# Start of program
# puts "Today's date is #{date}"
# puts "Please tell me your full name:"
# full_name = get_name

# puts "Thanks #{full_name.split[0]}, please enter your date of birth, like so: DD/MM/YYYY:"
age_calc

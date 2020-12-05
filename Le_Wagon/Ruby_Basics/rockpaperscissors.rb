choices = ["rock", "paper", "scissors"]

computers_choice = choices.sample

puts "Choose rock, paper or scissors:"
users_choice = gets.chomp

def compare_hands(computers_choice, users_choice)
  case users_choice
  when "rock"
    return "It's a tie" if computers_choice == "rock"
    return "You lose!" if computers_choice == "paper"
    return "You win!" if computers_choice == "scissors"
  when "scissors"
    return "It's a tie" if computers_choice == "scissors"
    return "You lose!" if computers_choice == "rock"
    return "You win!" if computers_choice == "paper"
  when "paper"
    return "It's a tie" if computers_choice == "paper"
    return "You lose!" if computers_choice == "scissors"
    return "You win!" if computers_choice == "rock"
  end
end

puts "Computer chose #{computers_choice}."
puts compare_hands(computers_choice,users_choice)

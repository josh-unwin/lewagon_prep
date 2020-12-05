def add_contact(contacts)
    puts "Provide a name: "
    name = gets.chomp
    puts "Provide a phone number: "
    phone = gets.chomp
    puts "Provide an email: "
    email = gets.chomp

    contact = {
        "name" => name,
        "phone" => phone,
        "email" => email
    }
    contacts.push(contact)
    puts name + " has been added to your contacts.\n\n"
end

def menu
    puts "What do you want to do? 1: Add contact. 2: Remove contact. 3: View Contacts. 4: Exit"
    user_selection = gets.chomp
    return user_selection
end

# Start of program
contacts = []
user_selection = menu

while user_selection.to_i != 4
    if user_selection == "1"
        add_contact(contacts)
        user_selection = menu
    elsif user_selection == "2"
        puts "TBC\n\n"
        user_selection = menu
    elsif user_selection == "3"
        puts contacts
        puts "\n\n"
        user_selection = menu
    elsif user_selection.to_i > 4
        puts "Please choose between options 1 to 4.\n\n"
        user_selection = menu
    end
end

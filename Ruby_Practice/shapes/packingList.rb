print "Please enter your destination: "
destination = gets.chomp

class Trip_Packing_List
    def initialize(packing_list)
        @packing_list = packing_list
    end

    attr_accessor :destination, :packing_list
    packing_list = []
end

users_trip = Trip_Packing_List.new([])
users_trip.destination = destination

puts "\nSo, you're going to #{users_trip.destination}! Let's make your packing list."

def menu
    puts "Choose from the following options:\n1. Add item/s to pack\n2. View your packing list\n3. Remove item from packing list"
    user_selection = gets.chomp.to_i
    return user_selection
end

def prompt_new_items
    puts "\nAdd items below. Items can be separated using a comma (,). Hit enter when finished."
    new_items = gets.chomp.tr(" ","")
    return new_items
end


def parse_new_items(new_items,users_trip)
    users_trip.packing_list.push(new_items.split(','))
end


def show_packing_list(users_trip)
    puts "\nYour packing list for #{users_trip.destination} is:"
    puts users_trip.packing_list
    puts "That's a total of #{users_trip.packing_list.length} things.\n"
end


def remove_item(packing_list)
    puts "Please enter the item you wish to remove:"
    item_to_remove = gets.chomp.downcase
    if packing_list.each{|item| item.downcase}.contains(item_to_remove)
       packing_list.delete(item_to_remove)
    else
        "Looks like that item doesn't exist in your list"
    end
end

while (user_selection = menu) < 4s
    if user_selection == 1
        parse_new_items(prompt_new_items,users_trip)
    elsif user_selection == 2
        show_packing_list(users_trip)
    elsif user_selection == 3
        remove_item(users_trip.packing_list)
    end
end



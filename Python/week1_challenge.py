#Write a program that accepts user input 
#to create a list of integers. 
#Then, compute the sum of all the integers in the list.
#numbers = input("Kindly enter a number separated by a comma: ").split()
#numbers = [int(num) for num in numbers]
#sum_of_numbers = sum(numbers)
#print("sum of the numbers is: ", sum_of_numbers)

#create a tuple of books and print on a separate line 
Fav_books = ("The Art of Stop Overthinking", "The Maze Runner", "The Subtittle Art of Not Giving a Fuck", "Flower Zone");
for book in Fav_books:
    print(book)

#Dictionary that stores someones information
personal_info = {}
personal_info["name"] = input("Enter your name: ")
personal_info["age"] = int(input("Enter your age: "))
personal_info["favourite color"] = input('Enter your favourite color: ')

print("Personal information:", personal_info)

#A program that accepts user input in two sets and prints the common numbers in the both sets
set1 = set(input("Enter integers for set 1 separated by spaces: ").split())
set2 = set(input("Enter integers for set 2 separated by spaces: ").split())
common_elements = set1.intersection(set2)
print("Common elements in both sets:", common_elements)

#Store a list of words and create a new list with words having an odd number of characters
word_list = ["apple", "banana", "orange", "kiwi", "grape"]
odd_length_words = [word for word in word_list if len(word) % 2 != 0]
print("Words with odd number of characters:", odd_length_words)

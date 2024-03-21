my_list = []
my_list = [10, 20, 30, 40]
print("oldlist:", my_list)

my_list.insert(1, 15);
print("after insert:", my_list)

new_list = [50, 60, 70]
my_list.extend(new_list);
print("after extend:", my_list)

del my_list[-1]
print("after remove:", my_list)

sorted_list = sorted(my_list)
print("sorted list:", sorted_list)

index_of_num = my_list.index(30)
print("index of30:", index_of_num)
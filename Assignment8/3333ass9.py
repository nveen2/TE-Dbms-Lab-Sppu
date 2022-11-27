import mysql.connector

connection = mysql.connector.connect(host='localhost',
                                         database='3333ass9',
                                         user='3333_Naveen',
                                         password='3333_Naveen')
                                         
if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to the database: ", record)
        
print ("Creating table T1 ")
cursor.execute("create table T1(id int primary key, name varchar(24))")
print("Showing tables : ")
cursor.execute("show tables")
for i in cursor:
	print(i)
print("Inserting 2 values in T1")
cursor.execute("insert into T1 values(101,'Nadim'), (102,'Naresh')")
cursor.execute("Select *from T1")
for i in cursor:
	print(i)

print ("Updating id 102 to 103")
cursor.execute("update T1 set id=103 where id=102")
cursor.execute("Select *from T1")
for i in cursor:
	print(i)
print("Deleting entry with id = 103")
cursor.execute("delete from T1 where id=103")
cursor.execute("Select *from T1")
for i in cursor:
	print(i)

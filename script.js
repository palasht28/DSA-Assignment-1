//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

//Solution
def CountPairs(arr, n, sum):
 
    count = 0 
    
    for i in range(0, n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == sum:
                count += 1
 
    return count

arr = [1,2,4,-3,5,-2]
n = len(arr)
sum = 6
print("Pairs possible: ",
      CountPairs(arr, n, sum))


//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

//Solution
def reverse(A):
    print( A[::-1])

A = [1, 2, 3, 4, 5, 6]
print(A)
print("Reversed list: ")
reverse(A) 
[1, 2, 3, 4, 5, 6]
Reversed list: 
[6, 5, 4, 3, 2, 1]


//Q3. Write a program to check if two strings are a rotation of each other?

//Solution
def checkRotation(s1, s2): 
    temp = '' 
  
   
    if len(s1) != len(s2): 
        return False
  
   
    temp = s1 + s1 
  
    
    if s2 in temp: 
        return True 
    else: 
        return False
  
 
string1 = str(input("Enter the first string: "))
string2 = str(input("Enter the second string: "))
  
if checkRotation(string1, string2): 
    print("Given Strings are rotations of each other.")
else: 
    print("Given Strings are not rotations of each other.")



    //Q4. Write a program to print the first non-repeated character from a string?

    //Solution
    def func1(str1):
    char_order = []
    counts = {}
    for c in str1:
        if c in counts:
            counts[c] += 1
        else:
            counts[c] = 1
            char_order.append(c)
    for c in char_order:
        if counts[c] == 1:
             return c
    return None

print(func1('Pneumonoultramicroscopicsilicovolcanoconiosis'))
print(func1('Hippopotomonstrosesquippedaliophobia'))
print(func1('Supercalifragilisticexpialidocious'))

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

//Solution
def TowerOfHanoi(n , from_rod, to_rod, aux_rod):
    if n == 1:
        print ("Move disk 1 from rod",from_rod,"to rod",to_rod)
        return
    TowerOfHanoi(n-1, from_rod, aux_rod, to_rod)
    print ("Move disk",n,"from rod",from_rod,"to rod",to_rod)
    TowerOfHanoi(n-1, aux_rod, to_rod, from_rod)
n = 3
TowerOfHanoi(n, 'A', 'C', 'B')
# A, B, C are the rod


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

//Solution
def push(x):
    global stack 
    global top
    top+=1
    stack[top]=x
def pop():
    global stack
    global top
    x=stack[top]
    top-=1
    return x
def isop(x):
    if x=='+' or x=='-' or x=='*' or x=='/':
        return True
    else:
        return False
def conversion():
    global stack
    global top
    l=len(exp)
    for i in range (0,l):
        if isop(exp[i])== True:
            op1= stack[top]
            pop()
            op2= stack[top]
            pop()
            tmp=exp[i]+op2+op1
            push(tmp)
        else:
            push(exp[i])
    print("prefix expression: ", stack[top])
    
stack=[]
top=-1
exp=input("Enter postfix expression: ")
for i in range(50):
    stack.append(0)
conversion()

//Q7. Write a program to convert prefix expression to infix expression.

//Solution
def conversion(prefix):
    stack = []


    i = len(prefix) - 1
    while i >= 0:
        if not isop(prefix[i]):


            stack.append(prefix[i])
            i -= 1
        else:


            str = "(" + stack.pop() + prefix[i] + stack.pop() + ")"
            stack.append(str)
            i -= 1

    return stack.pop()

def isop(x):
    if x == "*" or x == "+" or x == "-" or x == "/" or x == "^" or x == "(" or x == ")":
        return True
    else:
        return False


if __name__=="__main__":
    str = "*-A+BC-*AKL"
    print(conversion(str))

//Q8. Write a program to check if all the brackets are closed in a given code snippet.

//Solution
def check(expr):
    stack = []


    for char in expr:
        if char in ["(", "{", "["]:


            stack.append(char)
        else:


            if not stack:
                return False
            current_char = stack.pop()
            if current_char == '(':
                if char != ")":
                    return False
            if current_char == '{':
                if char != "}":
                    return False
            if current_char == '[':
                if char != "]":
                    return False

        
    if stack:
        return False
    return True


if __name__ == "__main__":
    expr = "{()}[]"


    if check(expr):
        print("Balanced")
    else:
        print("Not Balanced")

//Q9. Write a program to reverse a stack.

//Solution
class  Stack_to_reverse  :
   
    def __init__(  self  ):
        self.items  =  list()
        self.size=-1
 
    
    def  isEmpty(  self  ):
        if(self.size==-1):
            return True
        else:
            return False
 
    
    def  pop(  self  ):
        if  self.isEmpty():
            print("Stack is empty")
        else:
            return self.items.pop()
            self.size-=1
 
    
    def  push(  self,  item  ):
        self.items.append(item)
        self.size+=1
 
    def reverse(self,string):
        n = len(string)
 
 
        for i in range(0,n):
            S.push(string[i])
 
 
        string=""
 
 
 
        for i in range(0,n):
            string+=S.pop()
        return string

S =Stack_to_reverse()
seq=input("Enter a string to be reversed: ")
sequence = S.reverse(seq)
print("Reversed string is: " + sequence)

//Q10. Write a program to find the smallest number using a stack.

//Solution
class MinStack(object):
    min=float('inf')
        
    def __init__(self):
            self.min=float('inf')
            self.stack = []

    def push(self, x):
        if x<=self.min:
            self.stack.append(self.min)
            self.min = x
            self.stack.append(x)

    def pop(self):
        t = self.stack[-1]
        self.stack.pop()
        if self.min == t:
            self.min = self.stack[-1]
            self.stack.pop()

    def top(self):
          return self.stack[-1]

    def getMin(self):
          return self.min

    
m = MinStack()
m.push(-2)
m.push(0)
m.push(-3)
print(m.getMin())
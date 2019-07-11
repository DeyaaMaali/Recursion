// All the exercises should use while loop:

// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// dDont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before 

console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0

Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27

*/

function subtract (n)
{
	var sub = n;
	while (n > 0)
	{
		n--;
		sub = sub - n;
	}
	return sub;

}
console.log(subtract(2))
console.log(subtract(5))
console.log(subtract(9))
/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
console.log("______________________")

function factorial (n)
{
	var fact=1;
	while (n>=1)
	{
		fact=fact*n;
		n--;
	}
	return fact;
}
console.log(factorial(2));
console.log(factorial(4));



/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the stop condition should be [somthing=== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
console.log("______________________")

function repeatStr(str,n)
{	
	var s ="";
	var count = n;
	n=0;
	while (n===0)
	{
		s = s + " " + str;
		if ( count === 1)
			n=1;
		count--;
	}
	return s;
}
console.log(repeatStr("to",2));
console.log(repeatStr("to",4));


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number

Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
console.log("______________________")

function sum2(n1, n2)
{
	var sum = 0;
	while (n1 <= n2)
	{
		sum = sum + n1;
		n1++;
	}
	return sum;
}
console.log(sum2(4, 5));
console.log(sum2(3, 6));


/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the stop condition should be [somthing=== 0]
** Important: You should dint have extra space at the end

Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/

console.log("______________________");

function repeatStr2 (str1, str2)
{
	var n = str2.length;
	var str = "";
	while (n > 0)
	{
		str = str +" " + str1;
		n--;
	}
	return str;
}

console.log(repeatStr2("ro","cc"));
console.log(repeatStr2("ro","fff"));



/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **

Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48

*/

console.log("______________________");

function multiOf (a, b, c)
{
	var result = 1;
	while(c>0)
	{
		result = result * b;
		c--;
	}
	return a * result;
}

console.log(multiOf(4,10,3));
console.log(multiOf(6,3,2));
console.log(multiOf(6,2,3));


/*
7
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number

Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

console.log("______________________");

function muti2(n1, n2)
{
	var result = 1;
	while (n1 <= n2)
	{
		result = result * n1;
		n1++;
	}
	return result;
}

console.log(muti2(4, 5));
console.log(muti2(3, 6));



/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should dint have extra space at the end or comma
** Important: the stop condition should [num1===num2-1]
** hint: maybe you will have 2 if statment

numberBetweenUs(2,8) => "3, 4, 5, 6, 7"

numberBetweenUs(1,3) => "2"

*/

console.log("______________________");

function numberBetweenUs(n1, n2)
{
	var str ="";
	var x = 0;
	while (n1!==n2-1)
	{
		if (x===0)
		{
			n1++;
			x++;
		}	
		
		str = str + n1 +", ";
		n1++;
		if ( n1 === n2)
			n1 = n1 -1;
	}
	return str.slice(0,-2);
}

console.log(numberBetweenUs(2,8));
console.log(numberBetweenUs(1,3));


/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to ahve "done"
between each number a comma and space
** you need to use recursion
** Important: You should dint have extra space at the end or comma

countDown(5)
=> "5, 4, 3, 2, 1, done"

countDown(2)
=> "2, 1, done"

countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
console.log("______________________");

function countDown(n)
{
	var str="";
	while (n>0)
	{
		str = str + n +", ";
		n--;
	}
	return str + "done";
}

console.log(countDown(5));
console.log(countDown(2));
console.log(countDown(7));


/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum

multiplication2(5,4) => 20

multiplication2(2,8) => 16

multiplication2(7,6) =>  42
*/
console.log("______________________");

function multiplication2 (n1, n2)
{
	var sum = 0;
	while (n2>0)
	{
		sum = sum + n1;
		n2--;
	}
	return sum;
}
console.log(multiplication2(5,4));
console.log(multiplication2(2,8));
console.log(multiplication2(7,6));



/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1

mod2(2,8) => 2

mod2(7,4) => 3
*/

console.log("______________________");

function mod2 (n1, n2)
{
	while (n1 > n2)
		n1 = n1 - n2;
	return n1;
}

console.log(mod2(5,4));
console.log(mod2(2,8));
console.log(mod2(7,4));

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"

repeatChar("schOol","o") => 2

repeatChar("school","a") => 0

repeatChar("School","s") => 1

try more case by yourself
*/



console.log("______________________");

function repeatChar(str1, str2)
{
	var count = 0;
	while (str1.length !== 0)
	{
		if (str1[str1.length-1].toUpperCase() === str2.toUpperCase())
			count++;
		str1 = str1.slice(0,-1);
	}
	return count;
}


console.log(repeatChar("schOol","o"));
console.log(repeatChar("schOol","a"));
console.log(repeatChar("schOol","s"));


console.log("Basic finshed");
console.log("______________________");


// Advanced Part {for your benefits}

// Dont solve any question here if you didnt finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it

console.log("start of advanced");

/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number

Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1

fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/

function fibon (n)
{
	var b = 1;
	var a = 1;
	var sum =0;
	if (n===1 || n===0)
		return 1;
	while (n>1)
	{
		sum = a + b;
		b = a;
		a = sum;
		n--;
	}
	return sum;
}

console.log(fibon(7));
console.log(fibon(2));
console.log(fibon(1));
console.log(fibon(0));


/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end

mirror("school") => "loohcs"

mirror("car") => "rac"

mirror("maDrasa") => "asarDam"

*/
console.log("______________________");

function mirror(str)
{
	var n = str.length;
	var s = ""
	while (n--)
	{
		s = s + str[n];
	}
	return s;
}

console.log(mirror("school"));
console.log(mirror("car"));
console.log(mirror("maDrasa"));



/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end


mirrorCaseAlso("sChOol") => "LOoHcS"

mirrorCaseAlso("THOR") => "roht"

mirrorCaseAlso("BaBa") => "AbAb"

*/

console.log("______________________");

function mirrorCaseAlso(str)
{
	var n = str.length;
	var s = ""
	while (n--)
	{
		if(str[n]>="a")
			s = s + str[n].toUpperCase();
		else
			s = s + str[n].toLowerCase();
	}
	return s;

}

console.log(mirrorCaseAlso("sChOol"));
console.log(mirrorCaseAlso("THOR"));
console.log(mirrorCaseAlso("BaBa"));

/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"

repeatChar2("schOol","o") => 1

repeatChar2("school","a") => 0

repeatChar2("School","S") => 1

try more case by yourself
*/

console.log("______________________");

function repeatChar2 (str1, str2)
{
	var count = 0;
	while (str1.length !== 0)
	{
		if (str1[str1.length-1] === str2)
			count++;
		str1 = str1.slice(0,-1);
	}
	return count;
}

console.log(repeatChar2("schOol","o"));
console.log(repeatChar2("school","a"));
console.log(repeatChar2("School","S"));

/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her

Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2

Ex: welcomeSayHello(7); => 2
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/

console.log("______________________");
function welcomeSayHello(n)
{
	var m = 1;
	var str ="";
	var str2 ="";
	z=1;
	x=1;
	while (m<=n)
	{
		if (m===1)
			str = str + "hi 1  " ;
		else
			str = str +"hi " + m + " Now Please Say Hello to "
		while ( z < m-1)
			{
				if (z === x)
				{
					str = str.slice(0,-2);
				 	str = str + " and ";
				 	x++;
				}
				str = str + (z+1) +", ";
				z++;

			}


		m++;
		z=0;
		str = str.slice(0,-2) +"\n";
	}

	return str;
}

// console.log(welcomeSayHello(3));
console.log(welcomeSayHello(7));
// console.log("______________________");


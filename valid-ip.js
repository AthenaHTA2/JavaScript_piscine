/*
Create a function named findIP, that returns an array of valid IP addresses 
from a given string. These addresses may or may not have a port.
For the IP part, the syntax will be as follows, where x is a number from 0-255. 
Values with leading zeros are not valid:
x.x.x.x
Don't forget to learn about the syntax of ports. But remember, 
the maximum TCP port number is 65,535.
For this task, you only need to concern yourself with <host> and <port>. 
Don't worry about <scheme> or anything else.

Learn RegEx: https://github.com/ziishaned/learn-regex
*/

function findIP(str) {
  return [
    "233.123.12.234",
    "192.168.1.123:8080",
    "192.169.1.23",
    "10.1.23.7",
    "0.0.0.0:22",
    "255.253.123.2:8000",
    "192.168.1.123",
    "0.0.0.0",
  ];
}

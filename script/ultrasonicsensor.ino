

#include <Keyboard.h>

const int pingPin = 7; // Trigger Pin of Ultrasonic Sensor 
const int echoPin = 6; // Echo Pin of Ultrasonic Sensor 

void setup() 
{ 
Keyboard.begin();
Serial.begin(9600); // Starting Serial Terminal 
char turn = KEY_LEFT_CTRL
} 


void loop() 
{ 
long duration, cm; 
pinMode(pingPin, OUTPUT); 
digitalWrite(pingPin, LOW); 
delayMicroseconds(2); 
digitalWrite(pingPin, HIGH); 
delayMicroseconds(10); 
digitalWrite(pingPin, LOW); 
pinMode(echoPin, INPUT); 
duration = pulseIn(echoPin, HIGH); 
volatile boolean ISRRan = 0;

cm = microsecondsToCentimeters(duration); 
  
Serial.print(cm); 

Serial.print("cm"); 
Serial.println(); 
delay(100); 

if ( (cm > 10) or ( cm < 40))
{
Keyboard.press(turn);
delay(10);
Keyboard.realeaseAll();
ISRRan = 1;
}


if ( ISRRan )
{
break
} 
ISRRan = 0
}


 
long microsecondsToCentimeters(long microseconds) 
{ 
return microseconds / 29 / 2; 
}

var a;


setMotor('LEFT', 'FORWARD', '99');
setMotor('LEFT', 'FORWARD', '');
stopMotor('LEFT');
a = (getLightSensorValue('LEFT'));
a = (buttonHasBeenPressed('A'));
displayMessage(String('Sup'));
displayMessage(String(123));
displayMessage(String(true));
displayMessage(String(a));

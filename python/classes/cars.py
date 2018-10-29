#!/usr/bin/env python3

# base car class
class Car:
  def __init__(self, currentSpeed=0, maxSpeed=0, brand='unknown'):
    self.currentSpeed = currentSpeed;
    self.maxSpeed = maxSpeed;
    self.brand = brand;
    if self.currentSpeed > self.maxSpeed:
      self.log('You have exceeded max speed! slow down!')
      self.deccelerate()

  def log(self, message):
    print(self.__class__.__name__ + ": " + message)

  def onReachMaxSpeed(self):
    self.log('Max speed of {} has been reached'.format(self.currentSpeed))

  def accelerate(self):
    while self.currentSpeed < self.maxSpeed:
      self.currentSpeed += 1
    self.onReachMaxSpeed()

  def deccelerate(self):
    while self.currentSpeed > self.maxSpeed:
      self.currentSpeed -= 1
    self.onReachMaxSpeed()

  def drive(self):
    self.accelerate()

# camaro class
class Camaro(Car):
  def __init__(self, currentSpeed=0):
    Car.__init__(self, currentSpeed, 200, 'Chevy')

# caravan class
class Caravan(Car):
  def __init__(self, currentSpeed=0):
    Car.__init__(self, currentSpeed, 100, 'Dodge')

#!/usr/bin/env ruby

class Car
  def initialize(current_speed=0, max_speed=0, brand='unknown')
    @current_speed = current_speed;
    @max_speed = max_speed;
    @brand = brand
  end

  def accelerate
    until @current_speed == @max_speed do
      @current_speed += 1
    end
    puts "max speed of #{@current_speed} has been reached"
  end

  def drive
    self.accelerate
  end
end

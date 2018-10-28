#!/usr/bin/ruby

require './car'

class Camaro < Car
  def initialize(current_speed)
    super(current_speed, 200, 'Chevy')
  end
end

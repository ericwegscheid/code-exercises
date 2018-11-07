#!/usr/bin/env ruby

require './car'

class Camaro < Car
  def initialize(current_speed=0)
    super(current_speed, 200, 'Chevy')
  end
end

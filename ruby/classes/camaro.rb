#!/usr/bin/ruby

require './car'

class Camaro < Car
	def initialize(currentSpeed, maxSpeed=200, brand='Chevy')
		super(currentSpeed, maxSpeed, brand)
	end
end

#!/usr/bin/ruby

class Car
	def initialize(currentSpeed=0, maxSpeed=0, brand='unkown')
		@currentSpeed = currentSpeed;
		@maxSpeed = maxSpeed;
		@brand = brand
	end
	def accelerate
		until @currentSpeed == @maxSpeed do
			@currentSpeed += 1
		end
		puts "max speed of #{@currentSpeed} has been reached"
	end
	def drive
		self.accelerate
	end
end

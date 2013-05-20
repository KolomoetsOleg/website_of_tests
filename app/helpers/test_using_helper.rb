#encoding: UTF-8
module TestUsingHelper

	def okonc(time)
		case time.to_i
			when 1
				"a"
			when 2
				"ы"
			when 3
				"ы"
			else
				""
		end
	end

end

class RegistrationController < ApplicationController

	def new
		Team.create(user_params)
		byebug
	end

	def user_params
		params.require(:team).permit(:team_name,:size,:email)
	end

end

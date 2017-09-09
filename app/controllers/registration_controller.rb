class RegistrationController < ApplicationController

	def new
		@team = Team.create(user_params)
		byebug
		TeamMailer.on_registration_mail(@team).deliver_now
		byebug
	end

	def user_params
		params.require(:team).permit(:team_name,:size,:email)
	end

end

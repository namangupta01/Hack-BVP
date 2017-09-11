class RegistrationController < ApplicationController

	def new
		@team = Team.create(user_params)
		TeamMailer.on_registration_mail(@team).deliver_now
	end

	def user_params
		params.require(:team).permit(:team_name,:size,:email,:github)
	end

end

class TeamMailer < ApplicationMailer
	default from: 'courserarails@gmail.com'

	def on_registration_mail team
		byebug
		mail(to: team.email,subject: 'Registration @ HACK@BVP')
	end
end

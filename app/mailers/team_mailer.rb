class TeamMailer < ApplicationMailer
	default from: 'courserarails@gmail.com'

	def on_registration_mail team
		mail(to: team.email,subject: 'Registration For HACK@BVP')
	end
end

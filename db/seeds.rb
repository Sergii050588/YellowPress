unless Admin.find_by(role: 1)
  user = Admin.new(login: "admin", password: ENV['SUPERADMIN_PASSWORD'],
                  password_confirmation:ENV['SUPERADMIN_PASSWORD'], role: 1)

  user.save
  user.errors.each { |e| p e }
end
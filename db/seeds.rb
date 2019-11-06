# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# DEMO USER
demo_user = User.find_by(email: "demo@user.com")
if demo_user.nil?
    User.create(name: "demo", email: "demo@user.com", password: "demoPassword123")
end

# RESTAURANT SEEDS

# CITY SEEDS
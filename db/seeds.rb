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
Restaurant.destroy_all
Restaurant.create(name: "Limón Rotisserie", summary: "Since the day we opened our doors in 2002, Limon Rotisserie has set out to share the vibrant flavors of Peruvian cuisine with San Francisco locals and visitors alike. At the heart of what we serve are the authentic ingredients that we carefully select from local purveyors and sustainable growers. At Limon, we craft each dish with purpose and welcome you into our restaurants as if they were your second home", hours: "SUN-THURS: 11:30 am - 10:00 pm/ FRI-SAT: 11:30 am - 10:30 pm", dress_code: "casual", address: "1001 S Van Ness Ave, San Francisco, CA 94110", phone_number: "(415) 821-2134", website: "limonrotisserie.com", city_id: 1, pricing: 2)
Restaurant.create(name: "Trick Dog", summary: "", hours: "SUN-SAT: 3:00 pm - 2:00 am", dress_code: "casual", address: "3010 20th St, San Francisco, CA 94110", phone_number: "(415) 471-2999", website: "trickdogbar.com", city_id: 1, pricing: 2)

# CITY SEEDS
City.destroy_all
City.create(id: 1, name: "San Francisco", state: "California")
City.create(id: 2, name: "Phoenix", state: "Arizona")
City.create(id: 3, name: "New Orleans", state: "Louisiana")
City.create(id: 4, name: "Portland", state: "Oregon")
City.create(id: 5, name: "Chicago", state: "Illinois")
City.create(id: 6, name: "Austin", state: "Texas")
City.create(id: 7, name: "New York", state: "New York")
City.create(id: 8, name: "Des Moines", state: "Iowa")
City.create(id: 9, name: "Las Vegas", state: "Nevada")
City.create(id: 10, name: "Denver", state: "Dallas")
City.create(id: 11, name: "Seattle", state: "Washington")
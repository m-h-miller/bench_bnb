# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  benches = Bench.create!([
    {description: "Dangerous benches in middle of Houston -- risk takers only",
    lat: 40.725489,
    lng: -73.996948},

    {description: "Popular benches in front of St John's of Manhattan",
    lat: 40.729822,
    lng: -73.990175},

    {description: "Possible site of future benches?",
    lat: 40.728813,
    lng: -73.990796},

    {description: "Tompkins Square Park; home to many benches",
    lat: 40.726497,
    lng: -73.981745}
  ])
end

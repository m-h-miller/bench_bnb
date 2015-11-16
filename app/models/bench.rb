class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true
  validates :lat, uniqueness: true
  validates :lng, uniqueness: true
  validates :seating, presence: true

  def self.in_bounds(bounds)
    displayed = Bench.where(
      lat: (bounds["southWest"]["lat"])..(bounds["northEast"]["lat"]),
      lng: (bounds["southWest"]["lng"])..(bounds["northEast"]["lng"])
    )
  end
end

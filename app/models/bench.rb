class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true
  validates :lat, uniqueness: true
  validates :lng, uniqueness: true
  validates :seating, presence: true

  DEFAULT_SEATING = {filterParams: {"minSeats" => 0, "maxSeats" => 99}}

  def self.in_seating_range(seatRange = DEFAULT_SEATING)
    displayed = Bench.where(
      seating: (seatRange["minSeats"]..seatRange["maxSeats"])
    )
  end

  def self.in_bounds(bounds)
    displayed = Bench.where(
      lat: (bounds["southWest"]["lat"])..(bounds["northEast"]["lat"]),
      lng: (bounds["southWest"]["lng"])..(bounds["northEast"]["lng"])
    )
  end
end

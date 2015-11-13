class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true
  validates :lat, uniqueness: true
  validates :lng, uniqueness: true
end

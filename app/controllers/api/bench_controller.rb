class Api::BenchController < ApplicationController
  def create
    @bench = Bench.create!(bench_params)
  end

  def index
    @bench = Bench.in_bounds(params[:bounds])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end

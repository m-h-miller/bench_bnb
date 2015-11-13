json.array!(@bench) do |bench|
  json.partial!('bench', bench: bench)
end

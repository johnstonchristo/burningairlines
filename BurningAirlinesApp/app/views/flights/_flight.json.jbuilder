json.extract! flight, :id, :origin, :destination, :plane_id, :date, :remaining_seats, :created_at, :updated_at
json.url flight_url(flight, format: :json)

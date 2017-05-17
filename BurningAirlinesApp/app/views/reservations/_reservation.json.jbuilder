json.extract! reservation, :id, :date, :flight_id, :user_id, :row, :col, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)

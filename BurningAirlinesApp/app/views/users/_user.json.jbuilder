json.extract! user, :id, :name, :reservation_id, :created_at, :updated_at
json.url user_url(user, format: :json)

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170518133517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flights", force: :cascade do |t|
    t.text     "origin"
    t.text     "destination"
    t.integer  "plane_id"
    t.datetime "date"
    t.integer  "remaining_seats"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "col"
    t.integer  "row"
  end

  create_table "planes", force: :cascade do |t|
    t.integer  "name"
    t.integer  "row"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "col"
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "date"
    t.integer  "flight_id"
    t.integer  "user_id"
    t.integer  "row"
    t.text     "col"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.text     "name"
    t.integer  "reservation_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "users_flights", force: :cascade do |t|
    t.integer "user_id"
    t.integer "flight_id"
  end

end

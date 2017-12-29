# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
  email: "test@gmail.com",
  password: "123456",
  lazada_user_id: "nguyendactruong.kma@gmail.com",
  lazada_api_key: "SvezNSbXT9Aw8GDCfClYIJkTOMnKs-7FxjtWWl9bxg2wKaspAOcSE1su"
)

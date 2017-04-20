# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Survey.destroy_all

Survey.create(q1: '20 and under', q2: '3 years and under', q3: 'yes');
Survey.create(q1: 'Between 21 and 30', q2: 'Between 4 and 7 years', q3: 'no');
Survey.create(q1: 'Between 31 and 40', q2: '8 years and above', q3: 'yes');
Survey.create(q1: '41 and above', q2: '3 years and under', q3: 'yes');
Survey.create(q1: '20 and under', q2: 'Between 4 and 7 years', q3: 'yes');

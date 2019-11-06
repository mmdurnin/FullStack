class City < ApplicationRecord
    
    has_many :restaurants,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: 'Restaurant'
        
end

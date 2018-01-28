class Note < ApplicationRecord
    validates :title, :color, :body, presence:true
end

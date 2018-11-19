class Post < ApplicationRecord
    enum status: %w(Draft Published)
    enum privacy: %w(Publicly Privately)
    has_many_attached :images
    belongs_to :user
    validates :content, presence: true,length: { maximum: 500 }
    validates :title, presence: true
end

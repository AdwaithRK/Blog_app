class Post < ApplicationRecord
    enum status: %w(Draft Publish)
    enum privacy: %w(Publicly Privately)
    has_many_attached :images
    belongs_to :user
    validates :content, presence: true,length: { maximum: 1000 }
    validates :title, presence: true
end

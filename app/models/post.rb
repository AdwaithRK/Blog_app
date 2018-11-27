class Post < ApplicationRecord
    enum status: %w(Draft Publish)
    enum privacy: %w(Publicly Privately)
    has_many_attached :images
    has_many :comments
    belongs_to :user
    has_many :likes, as: :likeable, dependent: :destroy
    validates :content, presence: true, length: { maximum: 1000 }
    validates :title, presence: true
end

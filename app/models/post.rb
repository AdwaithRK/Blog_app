class Post < ApplicationRecord

    has_rich_text :content
    enum status: %w(Draft Publish)
    enum privacy: %w(Publicly Privately)

    belongs_to :user
    
    has_many_attached :images
    has_many :comments

    has_many :likes, as: :likeable, dependent: :destroy
    validates :content, presence: true, length: { maximum: 1000 }
    validates :title, presence: true
end

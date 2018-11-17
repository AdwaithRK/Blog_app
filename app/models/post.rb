class Post < ApplicationRecord
    enum status: %w(draft published)
    enum privacy: %w(public private)
    has_many_attached :images
    belongs_to :user
end

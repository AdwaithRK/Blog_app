class Comment < ApplicationRecord
    belongs_to :post
    belongs_to :user
    validates :content, presence: true
    has_many :likes, as: :likeable, dependent: :destroy
    has_many :children, class_name: "Comment", foreign_key: "parent_id"
    belongs_to :parent, class_name: "Comment", optional: true
end

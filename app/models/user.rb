class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy 
  has_one_attached :avatar

  has_many :likes, dependent: :destroy

  has_many :active_relationships, class_name:  "Relationship",foreign_key: "follower_id", dependent:   :destroy

  has_many :passive_relationships, class_name:  "Relationship",foreign_key: "followed_id", dependent:   :destroy

  has_many :following, through: :active_relationships, source: :followed

  has_many :followers, through: :passive_relationships

  # validate :password_complexity

  # def password_complexity
  #   if password.present? and not password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d). /)
  #     errors.add :password, "must include at least one lowercase letter, one uppercase letter, and one digit"
  #   end
  # end

  
end

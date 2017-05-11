class Post < ApplicationRecord
  attr_accessor :image, :remote_image_url

  validates :title, presence: true, length: { in: 3..100 }
  validates :body,  presence: true

  has_and_belongs_to_many :categories, join_table: :categories_posts

  accepts_nested_attributes_for :categories

  mount_uploader :image, ImageUploader

end

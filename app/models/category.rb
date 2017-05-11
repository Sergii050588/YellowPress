class Category < ApplicationRecord

  has_and_belongs_to_many :posts, join_table: :categories_posts

  CATEGORY_LIST = ["Fresh news", "Old news", "City news"]

  accepts_nested_attributes_for :posts

end

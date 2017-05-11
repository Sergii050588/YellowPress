class CategoriesPosts < ActiveRecord::Migration[5.1]
  def change
   create_table :categories_posts do |t|
      t.string :category_id, index: true
      t.string :post_id, index: true
    end
  end
end

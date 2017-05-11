class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string  :title,         null: false
      t.string  :image
      t.text    :body,          null: false, default: " "
      t.boolean :trash_basket,  null: false, default: false
      t.boolean :draft,         null: false, default: false
      t.boolean :wait_in_queue, null: false, default: false

      t.timestamps
    end
  end
end

class CreateSInfos < ActiveRecord::Migration[7.1]
  def change
    create_table :s_infos do |t|
      t.string :imageUrl
      t.string :heading
      t.string :slogon
      t.string :btnName
      t.string :redirectBtn

      t.timestamps
    end
  end
end
